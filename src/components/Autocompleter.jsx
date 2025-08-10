import { useEffect, useRef, useState } from "react"
import { useProjectStore } from "src/stores/projectPageStore"
import { IoIosSearch } from "react-icons/io";

export const Autocompleter = ()=>{

    const {projectSuggestions} = useProjectStore()
    const [showModal, setShowModal] = useState(false)
    const [search, setSearch] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const searchModal = useRef()
    const searchInput = useRef()
    const [openedOnce, setOpenedOnce] = useState(false)

    useEffect(()=>{
        const handleClickOutsideSearch = (event)=>{
            if (showModal && !searchModal.current.contains(event.target)){
                setOpenedOnce(true)
                setShowModal(false)
                setSearch('')
            }
        }

        document.addEventListener('mousedown', handleClickOutsideSearch)

        return()=>{
            document.removeEventListener('mousedown', handleClickOutsideSearch)
        }
    },[showModal])

    const handleClick = ()=>{
        if(!showModal && !openedOnce){
            setShowModal(true) 
        }
        else{
            setOpenedOnce(false)
        }
    }

    useEffect(()=>{
        setSuggestions(projectSuggestions)
    },[projectSuggestions])

    useEffect(()=>{
        if(showModal){
            searchModal.current.classList.add('translate-y-90')
            searchInput.current.focus()
        }
        else{
            searchModal.current.classList.remove('translate-y-90')
        }
    },[showModal])

    useEffect(()=>{
        setSuggestions(projectSuggestions.filter((suggestion)=>suggestion.name.toLowerCase().includes(search.toLowerCase())))
    },[search])

    

    return(
        <>
            <div>
                <ul className="flex gap-5 items-center justify-center">
                    <li>
                        <a className="cursor-pointer" href="/">Home</a>
                    </li>
                    <button onClick={handleClick} className="size-10 text-lg cursor-pointer">
                        <IoIosSearch/>
                    </button>
                </ul>
                
            </div>

            <div className="absolute bg-theme-coal-black/90">
            
            </div>

           <div onKeyDown={(e)=>{
                        if(e.key == 'Escape'){
                           setShowModal(false)
                        }
                    }} ref={searchModal} className="absolute bg-theme-coal-black/90 border border-theme-gray rounded-lg left-1/2 -top-78 transition-transform -translate-x-1/2 h-auto w-md">
                <div className="size-full flex flex-col p-2 gap-2">
                    <input value={search} ref={searchInput} onChange={(e)=>{
                        setSearch(e.target.value)
                    }} type="search" placeholder="" className="border w-full rounded-t-lg border-theme-gray p-2"/>
                    <section className="overflow-y-auto max-h-44">
                        <div className="rounded-sm border border-theme-gray">
                            {
                                suggestions.length > 0?(
                                    suggestions.map((suggestion)=>{
                                        
                                        
                                        return suggestion['externalLink']?(
                                            <a onClick={()=>{
                                                setShowModal(false)
                                            }} className="text-md border-b p-2 flex border-theme-gray-medium cursor-pointer hover:bg-theme-gray/30 font-black" href={`${suggestion.direction}`}>{suggestion.name}</a>
                                        ):(
                                            <a onClick={()=>{
                                                setShowModal(false)
                                            }} className="text-md border-b p-2 flex border-theme-gray-medium cursor-pointer hover:bg-theme-gray/30" href={`#${suggestion.direction}`}>#{suggestion.name}</a>
                                        )
                                        
                                       
                                    })
                                ):(
                                    <div className="p-2 text-md">
                                        No results
                                    </div>
                                )
                            }
                        </div>
                    </section>
                </div>
            </div>

           
           
            
        </>
        
    )
}
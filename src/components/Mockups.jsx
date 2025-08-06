import { useState } from "react"
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { CiSquareInfo } from "react-icons/ci";

const icons = {
    'github': FaGithub,
    'link': GoLinkExternal,
    'info': CiSquareInfo
}


export const Mockups = ({mockup})=>{

    const [isHovered, setIsHovered] = useState(false) 
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div key={`${mockup.dataId}-${mockup.name}`}className={`project ${mockup.style} overflow-hidden relative rounded-xl`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
                               
            {
                isHovered && mockup.video?(
                    
                        <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-[#478FC4] to-[#121212] to-[80%] gap-5">
                            <div className="flex gap-4 w-full px-8 justify-end">
                                {
                                    mockup.options.map(({icon, link})=>{
                                        const Icon = icons[icon]

                                        if(icon === 'info'){
                                            console.log()
                                            return(
                                                <a href={link}  key={`button-${mockup.dataId}-${icon}`} className="text-white p-1.5 hover:bg-theme-dark-blue hover:rotate-12 transition-transform bg-theme-primary-blue rounded-lg cursor-pointer">
                                                    <Icon size={25}/>
                                                </a>  
                                            ) 
                                        }
                                        else{
                                            return(
                                                <a href={link} target="__blank" key={`button-${mockup.dataId}-${icon}`} className="text-white p-1.5 hover:bg-theme-dark-blue hover:rotate-12 transition-transform bg-theme-primary-blue rounded-lg cursor-pointer">
                                                    <Icon size={25}/>
                                                </a>  
                                            ) 
                                        }
                                    })
                                }
                            </div>
                            <div className="aspect-video h-80 flex justify-center items-center">
                                <video src={mockup.video} className="rounded-xl border-5 border-white/10" autoPlay></video>
                            </div>
                        </div>
                   
                ):(

                    <div 
                        className="size-full relative"
                        onMouseEnter={()=>{setShowInfo(true)}}
                        onMouseLeave={()=>{setShowInfo(false)}}
                    >

                       
                       <img 
                            className="relative  rounded-xl z-10 object-cover size-full animate-fade" 
                            src={mockup.mockup} 
                            alt={`Screenshot of ${mockup.title}, a project created by Fabian Ortiz.`}>
                        </img>  

                        {
                            !mockup.video && showInfo && mockup.options?(
                                <div className="absolute z-20 left-0 top-0 size-full bg-black/60">
                                    <div className="flex size-full gap-4 justify-center items-center">
                                    {
                                        mockup.options.map(({icon, link})=>{
                                            const Icon = icons[icon]
                                            if(icon === 'info'){
                                                console.log()
                                                return(
                                                    <a href={link}  key={`button-${mockup.dataId}-${icon}`} className="text-white p-1.5 hover:bg-theme-dark-blue hover:rotate-12 transition-transform bg-theme-primary-blue rounded-lg cursor-pointer">
                                                        <Icon size={25}/>
                                                    </a>  
                                                ) 
                                            }
                                            else{
                                                return(
                                                    <a href={link} target="__blank" key={`button-${mockup.dataId}-${icon}`} className="text-white p-1.5 hover:bg-theme-dark-blue hover:rotate-12 transition-transform bg-theme-primary-blue rounded-lg cursor-pointer">
                                                        <Icon size={25}/>
                                                    </a>  
                                                ) 
                                            }
                                        })
                                    }
                                    </div>
                                </div>
                            ):
                            (
                                ''
                            )
                        }
                        
                    </div>
                )
            }            
                                
        </div>
    )
}
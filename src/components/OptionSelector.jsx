import { useEffect, useState } from "react"
import { handleClick } from "src/utils/handleClickButton"
import '@styles/stylesOptionSelector.css'
import { OptionCircle } from "./OptionCircle"


const OPTIONS = [
    {
        dataId: '0',
        content: (
            <>
                I'm a <strong className="text-theme-dark-blue dark:text-theme-primary-blue">Full Stack developer</strong> driven by curiosity and passion for crafting dynamic, reliable digital experiences, I bring both <strong className="text-theme-dark-blue dark:text-theme-primary-blue">creativity and precision to every line of code.</strong>
            </>
        )
    }
    ,
    {
        dataId: '1',
        content: (
            <>
                I offer <strong className = "text-theme-dark-blue dark:text-theme-primary-blue">end-to-end</strong> web development services bringing ideas to life from<strong class = "text-theme-dark-blue dark:text-theme-primary-blue"> intuitive page design to fully functional</strong>, seamless digital experiences.
            </>
        ) 
    }


]

export const OptionSelector = ()=>{

    const [selected, setSelected] = useState(OPTIONS[0].dataId)
    const handleClick = (value)=>{
        setSelected(value)
    }

    return (
        <div className="button-container flex flex-col justify-start gap-3 relative">
            
            <div className="flex gap-2">
            {
                OPTIONS.map((option)=>{
                    const isSelected = selected === option.dataId
                    return(
                        <button onClick={()=>{
                            handleClick(option.dataId)
                        }} key={`button-${option.dataId}`} className={`button-description-changer rounded-full size-5 hover:bg-theme-dark-blue/20 shadow transition-colors relative z-10 cursor-pointer ${isSelected?"bg-theme-primary-blue":""}`}>
                        </button>  
                    )  
                })
            }
            </div>

            <div className="prose text-gray-400">
                {OPTIONS[selected].content}
            </div>
            
        </div>
    )
}




import { useRef, useState } from "react"
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { CiSquareInfo } from "react-icons/ci";

const icons = {
    'github': FaGithub,
    'link': GoLinkExternal,
    'info': CiSquareInfo
}



export const Mockups = ({mockup})=>{

   

    const {link} = mockup.options.find((project)=>project.icon === 'info')
   
    const [isActive, setIsActive] = useState(false)

    const handleMouseEnter = (e)=>{
      
        setIsActive(true)
    }

    const handleMouseLeave = (e)=>{
        
        setIsActive(false) 
    }

    return (
        <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href={link} key={`${mockup.dataId}-${mockup.name}`}className={`project ${mockup.style}  relative rounded-xl shadow-[0_0_3px_-0.5px_rgba(255,255,255,0.1)] border border-theme-coal-black/20 dark:border dark:border-white/10 overflow-hidden flex justify-center items-center`}
        >
            <div className={`absolute size-full transition-opacity duration-700 bg-[linear-gradient(to_top,rgba(0,163,255,0.3)_0%,rgba(0,163,255,0)_30%)]  ${isActive?'opacity-100':'opacity-0'}`}>
                
            </div>

            <div className="w-[83%] h-10/12">
                <img 
                    
                    className={`relative outline-4 outline-theme-primary-blue/30 rounded-lg transition-transform duration-700 z-10 size-full object-cover ${isActive?'-translate-y-1 scale-101':''}`} 
                    src={mockup.mockup} 
                    alt={`Screenshot of ${mockup.title}, a project created by Fabian Ortiz.`}>
                </img> 
            </div>
            
                         
        </a>
    )
}
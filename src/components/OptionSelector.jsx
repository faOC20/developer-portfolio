import { handleClick } from "src/utils/handleClickButton"
import '@styles/stylesOptionSelector.css'

const OptionSelector = ({options, toManage})=>{

    return (
        <div className="button-container flex justify-start gap-3 relative">
            <div className="slider absolute h-5 w-5 rounded-full  transition-all duration-300 ease-in-out"></div>
            {
                options.map((option)=>(
                    <button onClick={()=>{handleClick(option.dataId, toManage)}} key={`button-${toManage}-${option.dataId}`} data-id = {`button-${toManage}-${option.dataId}`}
                    className={`button-description-changer rounded-full size-5 bg-theme-gray-light/40  hover:bg-theme-dark-blue/20 shadow transition-colors relative z-10 ${option.dataId == 0?'bg-theme-primary-blue':""}`}>
                    </button>
                ))
            }
        </div>
    )
}
export default OptionSelector
import { handleClick } from "src/utils/handleClickButton"
import '@styles/stylesOptionSelector.css'

const OptionSelector = ({options, toManage})=>{

    //el toManage, sera la palabra clave para identificar el elemento exacto.
    return (
        <div className="button-container flex justify-start gap-3 relative">
            <div className="slider absolute h-5 w-5 rounded-full  transition-all duration-300 ease-in-out"></div>
            {
                options.map((option)=>(
                    <button onClick={()=>{handleClick(option.dataId, toManage)}} key={`button-${toManage}-${option.dataId}`} data-id = {`button-${toManage}-${option.dataId}`}
                    className={`button-description-changer rounded-full size-5  hover:bg-theme-dark-blue/20 transition-colors relative z-10 ${option.dataId == 0?'bg-theme-primary-blue':""}`}>
                    </button>
                ))
            }
        </div>
    )
}
export default OptionSelector



{/* <script>
    let buttons = document.querySelectorAll('.button-description-changer')
    let slider = document.querySelector('.slider')
    let currentButton = '1'
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const id = button.getAttribute("data-id")
            const event = new CustomEvent('change-description', {detail:{id}})
            document.dispatchEvent(event)
        })
    })
    
    document.addEventListener('change-description', (event: Event) => {
        const customEvent = event as CustomEvent<{id:string}>
        const id = customEvent.detail.id
        
        if (currentButton == id) {
            return
        }
        
        // Mover el slider
        if (id === '2') {
            slider?.classList.add('move-to-second')
        } else {
            slider?.classList.remove('move-to-second')
        }
        
        // Actualizar estados de los botones
        if (currentButton) {
            document.querySelector(`[p-data-id='description-${currentButton}']`)?.classList.add('hidden')
            document.querySelector(`[data-id='${currentButton}']`)?.setAttribute('data-active', 'false')
        }

        currentButton = id
        document.querySelector(`[p-data-id='description-${currentButton}']`)?.classList.remove('hidden')
        document.querySelector(`[data-id='${currentButton}']`)?.setAttribute('data-active', 'true')
    })

   
</script> */}

// <style>
//     li{
//         list-style: none;
//     }

//     .button-container {
//         --button-size: 1.25rem;
//         --gap: 0.75rem;
//     }

//     .slider {
//         left: 0;
//         transform-origin: left center;
//     }

//     .slider.move-to-second {
//         transform: translateX(calc(var(--button-size) + var(--gap)));
//     }

//     .button-description-changer {
//         border: 2px solid var(--color-theme-gray-light);
//     }

//     .button-description-changer[data-active="true"] {
//         border-color: var(--color-theme-primary-blue);
//     }

// </style>
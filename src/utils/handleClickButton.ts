

const currentButtons: Record<string, string> = {};

export const handleClick = (id: string, toManage: string) => {
    // Inicializa el estado de `currentButton` para el componente si no existe
    if (!currentButtons[toManage]) {
        currentButtons[toManage] = '0';
    }

    // Verifica si el botón actual es el mismo que el clicado
    if (currentButtons[toManage] === id) {
        return;
    }

    // Actualizar estados de los botones para el componente específico
    if (currentButtons[toManage]) {
        document.querySelector(`[data-id='${toManage}-${currentButtons[toManage]}']`)?.classList.add('hidden');
        document.querySelector(`[data-id='button-${toManage}-${currentButtons[toManage]}']`)?.classList.remove('bg-theme-primary-blue');
    }

    currentButtons[toManage] = id; // Actualiza el estado para el componente específico

    document.querySelector(`[data-id='${toManage}-${currentButtons[toManage]}']`)?.classList.remove('hidden');
    document.querySelector(`[data-id='button-${toManage}-${currentButtons[toManage]}']`)?.classList.add('bg-theme-primary-blue');
};

// let currentButton = '0'

// export const handleClick = (id: string, toManage: string)=>{


//     // let slider = document.querySelector('.slider')

//     if (currentButton === id) {
//         return
//     }
    
//     // Mover el slider
//     // if (id === '1') {
//     //     slider?.classList.add('move-to-second')
//     // } else {
//     //     slider?.classList.remove('move-to-second')
//     // }
    
//     // Actualizar estados de los botones
//     if (currentButton) {
//         document.querySelector(`[data-id='${toManage}-${currentButton}']`)?.classList.add('hidden')
//         document.querySelector(`[data-id='button-${toManage}-${currentButton}']`)?.classList.remove('bg-theme-primary-blue')
       
//     }

//     currentButton = id
//     document.querySelector(`[data-id='${toManage}-${currentButton}']`)?.classList.remove('hidden')
//     document.querySelector(`[data-id='button-${toManage}-${currentButton}']`)?.classList.add('bg-theme-primary-blue')
    

// }


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



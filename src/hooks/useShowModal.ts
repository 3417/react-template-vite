import { useState } from "react";

interface modalProps {
    initVisible?: boolean
    onCancel?: () => void
    onOk?: () => void
}

function useBaseModal({initValue=false,onOk,onCancel}:modalProps = {}){
    const [visible,setVisible] = useState(initValue)

    const showModal = () => {
        setVisible(true)
    }   
    const hideModal = () => {
        setVisible(false)
    }
    const handleOk = () => {
        setVisible(false)
        onOk?.()
    }

    const handleCancel = () => {
        setVisible(false)
        onCancel?.()
    }

    return {
        visible,
        showModal,
        hideModal,
        handleOk,
        handleCancel
    }
}


export default useBaseModal;
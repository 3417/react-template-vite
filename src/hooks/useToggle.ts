import { useState, useCallback } from 'react';

const useToggle = (initValue: boolean) => {
    const [state, setState] = useState(initValue);
    const toggle = useCallback(() => {
        setState(!state)
    }, [state])
    return [state, toggle]
}


export default useToggle;
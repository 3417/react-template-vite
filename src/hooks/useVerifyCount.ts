// 封装验证码倒计时 (待验证!!!)
import { useEffect,useCallback } from "react"

const useVerifyCount = (initValue: number) => {
    const [count, setCount] = useState(initValue)
    const [isDisabled, setIsDisabled] = useState(false)

    const start = useCallback(() => {
        setIsDisabled(true)
        setCount(initValue)
    })

    useEffect(() => {
        if (count === 0) {
            setIsDisabled(false)
            clearInterval(timer);
            return
        }
        const timer = setInterval(() => {
            setCount(count => count - 1)
        }, 1000)
        return () => clearInterval(timer);
    }, [count, isDisabled])

    return [count, isDisabled, start] as const;
}
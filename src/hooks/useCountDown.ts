import React, { useState, useCallback, useEffect, useMemo } from 'react';
import dayjs from 'dayjs';
import useLatest from './useLatest';
type DTime = Date | number | string | undefined;

interface Options {
    targetDate?: DTime;
    interval?: number;
    onEnd?: () => void;
}

interface FormattedRes {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    ms: number;
}



const calcTime = (time: DTime) => {
    if (!time) return 0;
    const res = dayjs(time).valueOf() - new Date().getTime();
    return res < 0 ? 0 : res;
}

const resultParseMs = (millisconds: number): FormattedRes => {
    return {
        days: dayjs(millisconds).get('year'),  //天
        hours: dayjs().get('hour'), //时
        minutes: dayjs().get('minute'), //分
        seconds: dayjs().get('second'), //秒
        ms: dayjs().get('millisecond') //毫秒
    }
}


const useCountDown = (options?: Options) => {
    const { targetDate,interval=1000, onEnd } = options || {}
    const [time,setTime] = useState(()=>calcTime(targetDate));
    const onEndRef = useRef(onEnd);
    useEffect(()=>{
        if(!targetDate) return setTime(0);
        setTime(calcTime(targetDate));
        const timer = setInterval(()=>{
            const newTime = calcTime(targetDate);
            setTime(newTime);
            if(newTime === 0){
                clearInterval(timer);
                onEndRef.current?.();
            }
        },interval)

        return ()=>clearInterval(timer);
    },[targetDate,interval])

    const formattedRes = useMemo(()=>{
        return resultParseMs(time);
    },[time])

    return [time,formattedRes] as const;
}


export default useCountDown;
import { useRef, useEffect } from 'react';
function useWatch<T>(value: T, callback: (newValue: T, oldValue: T) => void) {
  const prevValueRef = useRef<T>(value);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      callback(value, prevValueRef.current);
      prevValueRef.current = value;
    }
  }, [value, callback]);
}

export default useWatch;

import React, { useEffect, useState } from 'react'


function useDebounce<T>(value:T,durationInMs=500) {
  const [val,setVal] = useState<T>(value)
  useEffect(()=>{
    const tout = setTimeout(() => {
      setVal(value)
    }, durationInMs);

    return ()=>clearTimeout(tout);
  },[durationInMs, value]);
  
  return (
    val
  )
}

export default useDebounce
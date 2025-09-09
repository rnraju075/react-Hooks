import React, { useEffect, useRef } from 'react'

const UseRefPrac = () => {
    // note the type
    const refval = useRef<HTMLDivElement | null>(null)
    console.log(refval);
    useEffect(() => {
        if (refval.current) {
      refval.current.style.backgroundColor = 'red'
      refval.current.style.textDecoration = 'line-through'
    }
    },[])
  return (

    <div ref={refval}>abc</div>
  )
}

export default UseRefPrac
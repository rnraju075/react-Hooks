import React, { useState } from 'react'

const UseStateHook = () => {
  const [count,setCount] = useState(0)
  const [counter,setCounter] = useState(0)
  const handleclick = () =>{
    setTimeout(() =>{
      setCounter(prev => prev + 1)
    },3000)
  }
    return (<>
    <div>{count}</div>
    <div>{counter}</div>
    <button onClick={() => setCount(count + 1)}>CLick</button>
    <button onClick={handleclick}>CLick</button>
    </>
  )
}

export default UseStateHook
import React, { useState } from 'react'

const UseStateHook = () => {
  const [count,setCount] = useState(0)
  return (<>
    <div>{count}</div>
    <button onClick={() => setCount(count + 1)}>CLick</button>
    </>
  )
}

export default UseStateHook
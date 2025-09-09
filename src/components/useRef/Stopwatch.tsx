import React, { useRef, useState } from 'react'

const Stopwatch = () => {
    const [startTime, setstartTime] = useState(0);
    const [now, setnow] = useState(0)
    const intravalRef = useRef(0)

const handleStart = () => {
    intravalRef.current = setInterval(() => {
        setstartTime(() => startTime + 1)
    },1000)
}
const handleStop = () => {
    clearInterval(intravalRef.current)
    intravalRef.current = 0
}
const handleReset = () => {
    setstartTime(0)
}

  return (<>
    <div>Stopwatch {intravalRef.current}</div>
    <button onClick={handleStart}>start</button>
    <button onClick={handleStop}>stop</button>
    <button onClick={handleReset}>reset</button>

    </>
  )
}

export default Stopwatch
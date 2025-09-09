import React, { useEffect } from 'react'

const RandomFunction = () => {
    useEffect(() => {
      console.log('lorem10');
      const intv = setInterval(() => {
        console.log('intervaldata');
      },1000)

      return () => {
        clearInterval(intv);
        console.log('cleanup');
        
      }
    }, [])
    
  return (
    <div>RandomFunction</div>
  )
}

export default RandomFunction
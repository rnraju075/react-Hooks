import React, { useState } from 'react'
import RandomFunction from './RandomFunction'

const CleanUp = () => {
    const [toggle, settoggle] = useState(false)
  return (
    <div>
        {toggle ? <RandomFunction /> : <div>no toggled </div>}
        <button onClick={() =>settoggle(!toggle)}>toggle</button>
    </div>

  )
}

export default CleanUp

// When the RandomFunction component mounts after clicking the toggle button, the setInterval starts running.
// When the toggle button is clicked again, the component unmounts, 
// and the interval stops running in the background because the useEffect cleanup function (clearInterval) is executed.
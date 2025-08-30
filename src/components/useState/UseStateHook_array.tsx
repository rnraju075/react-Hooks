import React, { useState } from 'react'
import { data } from '../../data'

const UseStateHook_array = () => {
  const [people,setPeople] = useState(data);

  const buttonHandler = (val:any) => {
    // console.log(val);
    setPeople(people.filter((pep) => Number(pep.id) !== Number(val)))
  }
  return (<>
  {
    people.map((obj) => {
      return  <div key={obj.id}>{obj.name}
      <button onClick={() => buttonHandler(obj.id)}>remove</button>
      </div>
     })
     
  } 

    
    <button onClick={() => setPeople([])}>Clear all</button>
    </>
  )
}

export default UseStateHook_array

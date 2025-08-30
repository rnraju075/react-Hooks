import React, { useState } from 'react'

const Object = () => {
    const [person,setPerson] = useState({
        name:'raju',
        age:25,
        hobby:'cricket'
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        // console.log(e.target,name,value) 
        setPerson((prev) => ({...prev,[name]:value}))
    }
    const handleSubmit = () => {
        console.log(person);
    }

  return (
    <div>
        <form action={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input type="text" name="age" id="age" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="hobby">Hobby</label>
                <input type="text" name="hobby" id="hobby" onChange={handleChange}/>
            </div>
            <button type="submit">Add Person</button>
        </form>
    </div>
  )
}

export default Object
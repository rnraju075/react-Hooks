import React, { useState } from 'react'

// imp
type Person = {
  name: string;
  age: number;
  hobby: string;
};

const ArrayState = () => {
    //imp type declaration
    const [person,setPerson] = useState<Person>({
        name:'',
        age:21,
        hobby:''
    })
    // type declaration for array
    const [people,setPeople] = useState<Person[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        // console.log(e.target,name,value) 
        setPerson((prev) => ({...prev,[name]:value}))
    }
    const handleSubmit = () => {
        console.log(person);
    setPeople((prev) => [...prev, person]);
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

export default ArrayState
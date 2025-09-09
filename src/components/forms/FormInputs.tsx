import { useState } from 'react'

const FormInputs = () => {
    const [detail, setdetail] = useState({ name: '', email: '' });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        // console.log(name,value)
        setdetail((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = () => {
        console.log(detail);
    }

    console.log(detail);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id="name" value={detail.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor='email'>email</label>
                <input type="email" name="email" id="email" value={detail.email} onChange={handleChange} />
            </div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default FormInputs
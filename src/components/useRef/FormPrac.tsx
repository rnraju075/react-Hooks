import React, { useEffect, useRef, useState, type HTMLAttributes } from 'react'

const FormPrac = () => {
    const [value, setvalue] = useState(0)
    const inpVal = useRef<HTMLInputElement | null>(null)
    const isFocused = useRef<HTMLInputElement | null>(null)
    const isMounted = useRef(false)

    useEffect(() => {
        if(isFocused.current){
        isFocused.current.focus();}
    }, [])

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
    }, [value])


    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (inpVal.current) { console.log(inpVal.current.value) }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" ref={inpVal} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>

            <h1>{value}</h1>
            <button type="button" onClick={() => { setvalue(value + 1) }}>Increase</button>
        </>
    )
}

export default FormPrac;
import React, { useRef, useState } from 'react';

const ControlledComponents = () => {
    
    // const [name, setName] = useState("");

    // const handleChange = (event) => setName(event.target.value)

    // Controlled component
    // Controlled with multiple input and validation
    // Multiple Inputs using Uncontrolled component and hybrid  component controlled and uncontrolled
    // Controlled vs Uncontrolled components in react
    // Redux
    // Createasyncthunk

    const nameRef = useRef();

    console.log(nameRef)

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(nameRef?.current?.value);
    }

    return (
    <form onSubmit={handleSubmit}>
        <label>
            Name
            <input ref={nameRef} type="text" // value={name} onChange={handleChange}
            />
        </label>
        <p>Your name is: {nameRef?.current?.value}</p>
        <button type='submit'>Submit</button>
    </form>
    );
};

export default ControlledComponents;
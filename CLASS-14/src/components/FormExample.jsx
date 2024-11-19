import React, { useState } from 'react';

const FormExample = () => {
    
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Form submitted with input: ${inputValue}`)
    }
    
    return (
        <div>
           <form onSubmit={handleSubmit}>
                <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form> 
        </div>
    );
};

export default FormExample;


// Stopping event propagation in react(Home Work)
// Key in mapping react
// Filter in JS
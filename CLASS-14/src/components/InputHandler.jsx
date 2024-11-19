import React, { useState } from 'react';

const InputHandler = () => {

    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }

    return (
        <div>
            <input type='text' value={inputValue} onChange={handleChange}></input>
            <p>Your Input: {inputValue}</p>
        </div>
    );
};

export default InputHandler;
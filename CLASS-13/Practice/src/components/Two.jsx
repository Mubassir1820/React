import React, { useState } from 'react';

const Two = () => {
    
    // const [value, setValue] = useState(5)
    
    // const incrementValue = () => {
    //     setValue(value + 1)
    // }
    // const decrementValue = () => {
    //     setValue(value - 1)
    // }



    const [user, setValue] = useState({
        name: "",
        email: "",
    })


    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setValue({
            ...user,
            [name]: value
        })
    }

    return (
        <div className='relative top-2.5 text-center'>
            {/* <button onClick={decrementValue}>-</button>
            <p>Value: {value}</p>
            <button onClick={incrementValue}>+</button> */}

            <input type='text' name='name' value={user?.name} onChange={handleInputChange} placeholder='Enter Your Name'></input>
            <input type='email' name='email' value={user?.email} onChange={handleInputChange} placeholder='Enter Your Email'></input>

            <p>Name: {user.name}</p>
            <p>Email:{user.email} </p>
        </div>
    );
};

export default Two;
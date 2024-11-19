import React, { useState } from 'react';

const ComponentOne = () => {
    
    // const [bankBalance, setBankBalance] = useState(5);
    // const [isVisible, setIsVisible] = useState(true)
    
    // const [inputValue, setInputValue] = useState("");
    // const handleInputChange = (event)=>setInputValue(event.target.value);
    
    const [user, setUser] = useState({
        name: "",
        email: "",
    })
    
    
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        // console.log(name,value)
        setUser({
            // To update the object
            ...user,
            [name] : value
        })
    }
    
    // const user2 = {name: "", email: ""};
    // // f,
    // const user2ndPart = {name: "f", email: ""}
    // // a
    // const user3rdPart = {name: "a", email: ""}

    // const finalUser = {
    //     ...user2,
    //     name: "a"
    // }




    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");

    // const handleNameChange = (e) => {
    //     setName(e.target.value)
    // }
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }

    return (
        <div>
            
            <input type='text' name='name' value={user?.name} onChange={handleInputChange} placeholder='Enter your name'/>
            <input type='email' name='email' value={user?.email} onChange={handleInputChange}  placeholder='Enter your Email'/>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>

            
            
            
            {/* <input type='text' value = {inputValue} onChange={handleInputChange} placeholder='Type something'/>
            <p>Your Input: {inputValue}</p> */}
            
            
            
            
            {/* {
                isVisible && <p>This is some Toggled text!</p>
            }
            <button onClick={()=> setIsVisible(!isVisible)}>
                {
                    isVisible ? "Hide": "Show"
                }
            </button> */}
            
            
            {/* <h1>This is our Component One: Initial Bank Balance: {bankBalance} Crore</h1>
            <button onClick={()=> setBankBalance(bankBalance + 10)}>Increase our bank balance by 10 crore</button> */}
        </div>
    );
};

export default ComponentOne;


// React Hook
// UseState Hook -> Function -> Bank Balance/State add
// [stateVariable, setStateFunction] = useState(5)



// State = situation
import React, { useState } from 'react';

const MultipleEventHandling = () => {
    
    const [count, setCount] = useState(0);
    const [hoverMessage, setHoverMessage] = useState("Initial Message");
    const handleClick = () => {
        setCount(count + 1)
    }

    const handleMouseOver = () => {
        setHoverMessage("Mouse is over the button");
    }
    const handleMouseOut = () => {
        setHoverMessage("Initial Message");
    }

    return (
        <div>
            <p>Clicked {count} times</p>
            <p>{hoverMessage}</p>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleClick}>
                Click or Hover Me
            </button>
        </div>
    );
};

export default MultipleEventHandling;
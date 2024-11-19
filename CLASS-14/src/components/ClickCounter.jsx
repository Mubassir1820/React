import React, { useState } from 'react';

const ClickCounter = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p>{count} times</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default ClickCounter;
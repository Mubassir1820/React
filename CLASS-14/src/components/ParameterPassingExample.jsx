import React, { useState } from 'react';

const ParameterPassingExample = () => {
    
    const [count, setCount] = useState(0)

    const inputHandler = (num) => {
        setCount(count + num)
    }

    
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> inputHandler(5)}>Increment by 5</button>
            <button onClick={()=> inputHandler(10)}>Increment by 10</button>
        </div>
    );
};

export default ParameterPassingExample;
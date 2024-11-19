import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {

    const [property, setProperty] = useState(10)

    const propertyHandler = (amount) => {
        setProperty(amount)
    }

    return (
        <div>
            <h2> I am a Parent component: I am the father I have {property} lacs</h2>
            <Child property={property} propertyHandler={propertyHandler}></Child>
        </div>
    );
};

export default Parent;
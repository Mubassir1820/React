import React from 'react';

const Child = ({property, propertyHandler}) => {
    return (
        <div>
            <h1>I am a child component, I have inherited {property} lacs</h1>
            <button onClick={() => {propertyHandler(200)}}>Invest now</button>
            <button onClick={() => {propertyHandler(300)}}>Invest now</button>
            <button onClick={() => {propertyHandler(400)}}>Invest now</button>
            <button onClick={() => {propertyHandler(500)}}>Invest now</button>
        </div>
    );
};

export default Child;
import React from "react";

const Product = ({imageUrl, name, price, children, handleClick1}) => {
    
    // const imageUrl = props.imageUrl;
    // const name = props.name;
    // const price = props.price;

    
    return (
        <div onClick = {handleClick1} className="border p-5 rounded-xl text-center">
            <h3 className="font-bold p-2">{children}</h3>
            <img className="h-72 w-full object-cover rounded-2xl mb-2" src={imageUrl}/>
            <h2 className="text-xl font-bold">{name}</h2>
            <p>Price: <span className="font-bold">${price}</span></p>
        </div>
    )
}

export default Product;
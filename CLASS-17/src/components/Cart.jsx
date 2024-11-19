import React, { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';

const Cart = () => {
    
    const {cart, removeFromCart} = useContext(CartContext);

    // const removeFromCart = (productId) => {
    //     setCart(prevCart => prevCart.filter((item) => item.id !== productId))
    // }
    
    return (
        <div className='py-20 mx-auto container'>
            <h3>This is our Cart Page</h3>

            {
                cart?.map(product =>{
                    return <div key={product?.id} className='flex gap-2 items-center border py-5 mb-10 rounded-lg'>
                        <img className='w-20 h-20' src={product?.image} />
                        <h3>{product?.title}</h3>
                        <button onClick={() => removeFromCart(product?.id)}>Remove Product</button>
                    </div>
                })
            }
        </div>
    );
};

export default Cart;
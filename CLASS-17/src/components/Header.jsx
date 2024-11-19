import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

const Header = () => {

    const {cart} = useContext(CartContext)

    return (
        <div className='bg-blue-500 text-white'>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>About</li>
                <li>
                    <Link to={'/cart'}>Cart: {cart?.length}</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
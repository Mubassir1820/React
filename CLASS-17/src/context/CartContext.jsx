import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();



export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(()=>{
        const savedCart = localStorage.getItem('cart')
        return savedCart?JSON.parse(savedCart) : [];
    })


    const addToCart = (product) => {
        // console.log(product)
        // window.localStorage.setItem('cart',)
        const isExisted = cart?.find((item) => product?.id);
        if(isExisted){
            alert("This product is already in cart");
        }
        else{
            setCart((prevCart) => [...prevCart, product]);
        }
        setCart((prevCart) => [...prevCart, product])
    }

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter((item) => item.id !== productId))
    }

    useEffect(()=> {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    
    return <CartContext.Provider value={{addToCart, cart, setCart, removeFromCart}}>
        {children}
    </CartContext.Provider>;
}
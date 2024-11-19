import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cartContext';

const ProductList = () => {
    
    const [products, setProducts] = useState([]);
    const {addToCart, cart} = useContext(CartContext)

    // const [cart, setCart] = useState(()=>{
    //     const savedCart = localStorage.getItem('cart')
    //     return savedCart?JSON.parse(savedCart) : [];
    // })


    // const addToCart = (product) => {
    //     // console.log(product)
    //     // window.localStorage.setItem('cart',)
    //     setCart((prevCart) => [...prevCart, product])
    // }

    // useEffect(()=> {
    //     window.localStorage.setItem('cart', JSON.stringify(cart));
    // }, [cart])

    useEffect(()=>{
        const getProducts =  async() => {
            const response = await fetch("https://fakestoreapi.com/products")
            const data = await response.json();
            // console.log(data);

            setProducts(data);
        }
        getProducts();
    },[])
    
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mb-5 uppercase'>Our Cart: Total Items {cart.length}</h2>
            <h2 className='text-2xl font-bold text-center mb-5 uppercase'>Our Products</h2>
            <div className='grid grid-cols-3 container mx-auto gap-5'>
            {
                
                products && products.length > 0 && products.map((product) => {
                    return <div className='border rounded-lg p-5' key={product.id}>
                        
                            <img className='h-40 object-contain mx-auto' src={product?.image}/>
                            <h3 className='text-xs leading-1'>{product?.title}</h3>
                            <h3 className='text-xl font-bold mb-4'>{product?.price}</h3>
                            <button onClick={()=> addToCart(product)} className='w-full rounded-md bg-blue-500 py-1 text-white uppercase text-sm'>Add to Cart</button>
                         </div>
                })
            }
            </div>
        </div>
    );
};

export default ProductList;


// localstorage vs sessionstorage, see cart items and its adding in js
import React, { useState } from 'react';

const ProductList = () => {
    
    const [products, setProducts] = useState([])

    const [productName, setProductName] = useState("")
    const [productPrice, setProductPrice] = useState("")

    const handleAddProduct = () => {
        if(productName == ""){
            alert("Kindly enter the product name")
            return;
        }
        if(productPrice == 0){
            alert("Kindly enter the product price")
            return;
        }


        if(productName && productPrice){
            
            const newProduct = {name: productName, price: productPrice}
            
            setProducts([
                ...products,
                newProduct
            ]);
            setProductName("");
            setProductPrice("");
        }
    }

    const handleRemoveProduct = (removeIndex) => {
        const filteredProducts = products?.filter(
            (_, index) => index !== removeIndex
        );
        setProducts(filteredProducts);
    }
    
    return (
        <div style={{marginBottom: "20px"}}>
            <input type='text' value={productName} onChange={(e) => setProductName(e.target.value)}
            placeholder='Enter your product name'
            ></input>
            <input type='text' value={productPrice} onChange={(e) => setProductPrice(e.target.value)}
            placeholder='Enter your product Price'
            ></input>
            <button onClick={handleAddProduct}>Add product: </button>
            <ul>{products?.map((product, index) => (
                <div key={index}>
                    <li>Name:{product.name} - Price: {product.price}</li>
                    <button onClick={() => handleRemoveProduct(index)}>Remove this product</button>
                </div>
        ))}</ul>
        </div>
    );
};

export default ProductList;
import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts ] = useState(first10); 
    const [cart , setCart] = useState([]);
    
    const handleAddProduct = (product) =>{
        console.log('clicked', product);
        const newCart = [...cart, product];
        setCart(newCart); 
    }

    return (
        <div className='shop-container'>
            <div className="productContainer">
                
                {
                    products.map(pd => <Product
                        addProduct = {handleAddProduct}
                        product ={pd}>

                         </Product>)
                }
                
            </div>
            <div className="cartContainer">
                <Cart crt={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus ,faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

function Product(props) {
    //console.log(props);
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='Product'>
            <div>
                <img src={img} alt=''/>
            </div>
            <div className='productDetails'>
                <h5 className='productName'>{name}</h5>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                <button className='addToCart' onClick={ () => props.addProduct(props.product)}> <FontAwesomeIcon icon={faCartPlus} />  add to cart</button>
            </div>

        </div>
    );
}

export default Product;
import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.crt;
    console.log(cart);
    const totalPrice = cart.reduce((total, prdct) =>total +prdct.price, 0);

    let shipping = 0;
    if(totalPrice>100) shipping = 0;
    else if(totalPrice >50) shipping = 6.49;
    else if(totalPrice>0) shipping = 12.99;

    const tax = (totalPrice/10).toFixed(2);
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price: totalPrice</p>
            <p>Shipping Cost : {shipping}</p>
            <p><small>Tax+Vat. : {tax} </small></p>
            <p>Total Price: {(totalPrice + shipping + Number(tax)).toFixed(0)}</p>
        </div>
    );
};

export default Cart;
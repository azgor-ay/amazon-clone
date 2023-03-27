import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    console.log(props)
    const { cart } = props
    let totalPrice = 0;
    let totalShippingCost = 0;
    for (const product of cart) {
        totalPrice = product.price + totalPrice
        totalShippingCost = product.shipping + totalShippingCost;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShippingCost + tax;
    return (
        <div className='cart-added-product-container'>
            <h5 className='title'>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {(totalPrice * 105.05).toFixed(0)}</p>
            <p>Shipping: {(totalShippingCost * 105.05).toFixed(0)}</p>
            <p>Tax: {(tax * 105.05).toFixed(0)}</p>
            <h6>Grand Total: {(grandTotal * 105.05).toFixed(0)}</h6>
        </div>
    );
};

export default Cart;
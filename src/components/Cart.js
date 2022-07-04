import React, {useContext} from "react";
import {CartContext} from "../Global/CartContext";
const Cart = () => {
    const {shoppingCart, totalPrice, qty, dispatch} = useContext(CartContext);
    console.log(shoppingCart);
    return(
        <div className="cart-container">
            <div className="cart-details">
                {/* Call Back Connector */}
                {shoppingCart.length > 0 ? shoppingCart.map(cart => (
                        <div className="cart" key={cart.id}>
                            <span className="cart-image"><img src={cart.image} alt="not found" /></span>
                            <span className="cart-product-name">{cart.name}</span>
                            <span className="cart-product-price">{cart.price}</span>
                            <span className="inc" onClick={() => dispatch({type: 'INC', id: cart.id})}>
                                <i className="fas fa-plus"></i></span>
                            <span className="product-quantity">{cart.qty}</span>
                            <span className="dec" onClick={() => dispatch({type: 'DEC', id: cart.id})}>
                                <i className="fas fa-minus"></i></span>
                            <span className="product-total-price">PKR {cart.qty * cart.price}</span>
                            {/* <span className="delete-product"><i className="fas fa-trash-alt"></i></span> */}
                            <button onClick={() => dispatch({type: 'DELETE_PRODUCT', id: cart.id})} className="delete-product">
                                <i className="fas fa-trash-alt"></i></button>
                        </div>    
                    ))
                : 'Sorry your cart is currently empty'}
            </div>
        </div>
    )
}

export default Cart;
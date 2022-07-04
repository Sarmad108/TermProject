import React, {useContext} from "react";
import {CartContext} from "../Global/CartContext"
import { Link } from "react-router-dom";

const NavBar = () => {
    const {qty} = useContext(CartContext);
    return(
        <nav>
            <ul className="left">
                <li><Link to="/">Tailor Inc.</Link></li>
            </ul>
            <ul className="right">
                <li><Link to="/cart">
                    <span className="shoppingCart"><i className="fas fa-cart-plus"></i>
                    <span className="cartCount">{qty}</span></span>
                </Link></li>
            </ul>  
        </nav>
    )
}

export default NavBar;
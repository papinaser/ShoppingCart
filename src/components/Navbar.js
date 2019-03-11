import React from "react";
import {Link} from "react-router-dom";
import cart from "../Cart";
const Navbar=()=>{
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>
                <ul className="right">
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/cart">My Cart</Link></li>
                    <li><Link to="/recipe"><i className="material-icons">shopping_cart</i></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
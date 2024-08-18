import React, { useState } from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faShop } from '@fortawesome/free-solid-svg-icons';

import logo from '../Assets/logo.png';
import cartIcon from '../Assets/cart.png';
import { Link } from "react-router-dom";

const Navbar = () =>{

    const[menu,setMenu] = useState("shop");

    return(
        <div className="navbar">
            <div className="nav-logo">
            <FontAwesomeIcon icon={faShop} size="2x" style={{ color: 'grey' }}/>
                <p>Shopping</p>
            </div>
           
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu ==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu ==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu ==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>{menu ==="kids"?<hr/>:<></>}</li>
                
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'>
                <button>
                    Login
                </button></Link>
                <Link to='/cart'>
                    {/* <img src={cartIcon} alt="cart" /> */}
                    <FontAwesomeIcon icon={faShoppingCart} size="2x" style={{ color: 'grey' }}/>
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;
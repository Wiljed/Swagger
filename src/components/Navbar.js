import React from 'react';
import {  Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="nav-wrapper  grey lighten-2">
                <div className="container">
                    <Link to="/" className="brand-logo left">Swagger</Link>
                    <a href="#" data-target="mobile-demo" class=" right sidenav-trigger"><i class="material-icons">menu</i></a>

                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Clothes</Link></li>
                        <li><Link to="/categoryPage">Sales items</Link></li>
                        <li><Link to="/cart"><i className="material-icons right">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>

            <ul class="sidenav" id="mobile-demo">
                <li><Link to="/">Clothes</Link></li>
                <li><Link to="/categoryPage">Sales items</Link></li>
                <li><Link to="/cart"><i className="material-icons right">shopping_cart</i></Link></li>
            </ul>
        </div>
    )
}

export default Navbar;
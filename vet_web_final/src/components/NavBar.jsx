import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav>
            <Link to="/">
                <img src='/images/home.gif' alt='Home' width='132' height='27'/>
            </Link> &nbsp;
            <Link to="/services">
                <img src='/images/services.gif' alt='Services' width='132' height='27'/>
            </Link> &nbsp;
            <Link to="/askvet">
                <img src='/images/askthevet.gif' alt='Ask the Vet' width='132' height='27'/>
            </Link> &nbsp;
            <Link to="/shop">
                <img src='/images/shop.gif' alt='Shop' width='132' height='27'/>
            </Link>
            <Link to="/contact">
                <img src='/images/contact.gif' alt='Contact' width='132' height='27'/>
            </Link>
        </nav>
    )
}

export default NavBar;
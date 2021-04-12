import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HamBurger() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="ham-burger">
      <Link to="#" onClick={() => setSidebar(true)}>
        <span></span>
        <span></span>
        <span></span>
      </Link>

      <div className="sidebar d-md-none">
        <div className={`sidebar_route ${!sidebar && 'd-none'}`}>
          <div className="cross">
            <span
              class="lnr lnr-cross"
              onClick={() => setSidebar(false)}></span>
          </div>
          <ul className="sidebar_route_list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search-medicine">Shop</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HamBurger;

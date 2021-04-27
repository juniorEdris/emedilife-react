import React from 'react';
import { Link } from 'react-router-dom';

function NavList() {
  return (
    <div className="nav_links">
      <ul>
        <li>
          <Link to="/" className="nav-all">
            <span class="lnr lnr-menu"></span> all
          </Link>
        </li>
        <li>
          <Link to="/">best sellers</Link>{' '}
          {/*"/bestsellers" <span className="lnr lnr-chevron-down" />*/}
        </li>
        <li>
          <Link to="/">todays deals</Link>
        </li>
        <li>
          <Link to="/">mobiles</Link>
        </li>
        <li>
          <Link to="/">prime</Link>
        </li>
        <li>
          <Link to="/">fashion</Link>
        </li>
        <li>
          <Link to="/">customer service</Link>
        </li>
        <li>
          <Link to="/">amazon pay</Link>
        </li>
        <li>
          <Link to="/">electronics</Link>
        </li>
        <li>
          <Link to="/">computers</Link>
        </li>
        <li>
          <Link to="/" className="">
            see more
          </Link>
        </li>
        {/* <li>
          <Link to="/gift-ideas">gift ideas</Link>
        </li>
        <li>
          <Link to="/home-kitchen">home &amp; kitchen</Link>
        </li>
        <li>
          <Link to="/books">books</Link>
        </li>
        <li>
          <Link to="/gift-cards">gift cards</Link>
        </li>
        <li>
          <Link to="/sell">sell</Link>
        </li> */}
      </ul>
    </div>
  );
}

export default NavList;

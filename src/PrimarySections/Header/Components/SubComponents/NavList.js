import React from 'react';
import { Link } from 'react-router-dom';

function NavList() {
  return (
    <div className="nav_links">
      <ul>
        <li>
          <Link to="/all">
            <span class="lnr lnr-menu"></span> all
          </Link>
        </li>
        <li>
          <Link to="/bestsellers">best sellers</Link>
        </li>
        <li>
          <Link to="/todaysdeals">todays deals</Link>
        </li>
        <li>
          <Link to="/mobiles">mobiles</Link>
        </li>
        <li>
          <Link to="/prime">
            prime <span className="lnr lnr-chevron-down" />
          </Link>
        </li>
        <li>
          <Link to="/fashion">fashion</Link>
        </li>
        <li>
          <Link to="/customer-service">customer service</Link>
        </li>
        <li>
          <Link to="/amazon-pay">amazon pay</Link>
        </li>
        <li>
          <Link to="/electronice">electronics</Link>
        </li>
        <li>
          <Link to="/computers">computers</Link>
        </li>
        <li>
          <Link to="/computers">see more</Link>
        </li>
        {/* <li>
                    <Link to='/gift-ideas'>gift ideas</Link>
                </li>
                <li>
                    <Link to='/home-kitchen'>home &amp; kitchen</Link>
                </li>
                <li>
                    <Link to='/books'>books</Link>
                </li>
                <li>
                    <Link to='/gift-cards'>gift cards</Link>
                </li>
                <li>
                    <Link to='/sell'>sell</Link>
                </li> */}
      </ul>
    </div>
  );
}

export default NavList;

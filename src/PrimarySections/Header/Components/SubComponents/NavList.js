import React from 'react';
import { Link } from 'react-router-dom';

function NavList(props) {
  const allCategory = (e) => {
    e.preventDefault();
    props.setCategoryBar(!props.categoryBar);
  };
  const preventEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="nav_links">
      <ul>
        <li>
          <Link to="#" className="nav-all" onClick={allCategory}>
            <span class="lnr lnr-menu"></span> all
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
            best sellers
          </Link>{' '}
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
            todays deals
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
            mobiles
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
            prime
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
            fashion
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
            customer service
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
            amazon pay
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
            electronics
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
            computers
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent} className="">
            see more
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavList;

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
            Order Medicines
          </Link>{' '}
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
          Healthcare Products
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
          Medishebok Service
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent}>
          e-Appointment
          </Link>
        </li>
        <li>
          <Link to="#" onClick={preventEvent} className="">
          Lab Tests
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavList;

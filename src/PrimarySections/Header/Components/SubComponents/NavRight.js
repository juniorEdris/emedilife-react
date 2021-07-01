/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function NavRight() {
  const preventEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="more_link">
      <Link to="#" onClick={preventEvent}>
        <span>Shopping made easy</span>
      </Link>
      <span className="divider">|</span>{' '}
      <a href="https://play.google.com/store/apps/details?id=dev.changetech.medipathy" >
        <span>Download the app</span>
      </a>
    </div>
  );
}

export default NavRight;

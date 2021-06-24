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
      <Link to="#" onClick={preventEvent}>
        <span>Download the app</span>
      </Link>
    </div>
  );
}

export default NavRight;

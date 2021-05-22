import React from 'react';
import { Link } from 'react-router-dom';

function NavRight() {
  return (
    <div className="more_link">
      <Link to="#">
        <span>Shopping made easy</span>
      </Link>
      <span className="divider">|</span>{' '}
      <Link to="#">
        <span>Download the app</span>
      </Link>
    </div>
  );
}

export default NavRight;

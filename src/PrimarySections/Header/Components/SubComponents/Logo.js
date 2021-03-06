import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <Link to="/">
        <img
          className="header__logo"
          src={'assets/images/primary/emedilife Web logo.svg'}
          alt="Uparzon Logo"
        />
      </Link>
    </>
  );
}

export default Logo;

import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <>
      <Link to="/">
        <img
          className="header__logo"
          src={'assets/svg/logo_svg/logo.svg'}
          // src={'assets/images/primary/emedilife-logo.png'}
          alt="Uparzon Logo"
        />
      </Link>
    </>
  );
}

export default Logo;

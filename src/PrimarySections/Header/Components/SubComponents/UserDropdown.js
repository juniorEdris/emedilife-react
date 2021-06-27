import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutAction } from '../../../../Redux/Action/UserAction';

const UserDropdown = (props) => {
  return (
    <>
      {!props.user ? (
        <div className="header__option pl-1">
          <Link to={'/login'} className="header__link">
            <div className="header__option__lineOne header_my_account">
              <img src="./assets/svg/icons/login.svg" alt="login icon" />
              Sign In
            </div>
          </Link>
        </div>
      ) : (
        <div className="header__option pl-1">
          <Link to={'/dashboard'} className="header__link">
            <div className="header__option__lineOne header_my_account">
              <img
                src="./assets/svg/icons/dashboard.svg"
                alt="myaccount icon"
              />{' '}
              My account
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.User.user,
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(LogOutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);

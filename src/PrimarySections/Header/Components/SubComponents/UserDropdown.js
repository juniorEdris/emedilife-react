import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutAction } from '../../../../Redux/Action/UserAction';

const UserDropdown = (props) => {
  return (
    <>
      <Link to={!props.user ? '/login' : '/dashboard'} className="header__link">
        {!props.user ? (
          <div className="header__option">
            <span className="header__option__lineOne">Sign In</span>
            {/* <span className="header__option__lineTwo">Sign In</span> */}
          </div>
        ) : (
          <div className="header__option">
            <span className="header__option__lineOne">My account</span>
            {/* <span
              className="header__option__lineTwo"
              onClick={() => props.logOut()}>
              Logout
            </span> */}
          </div>
        )}
      </Link>
      {/* {dropdown && (
        <div className="dropdown">
          {!props.user ? (
            <ul>
              <li>
                <Link to="/login">log in</Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to={!props.user ? `/login` : `/dashboard`}>
                  dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    props.logOut();
                  }}>
                  log out
                </Link>
              </li>
            </ul>
          )}
        </div>
      )} */}
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

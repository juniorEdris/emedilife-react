import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function HamBurger(props) {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="ham-burger">
      <Link to="#" onClick={() => setSidebar(true)}>
        <span></span>
        <span></span>
        <span></span>
      </Link>

      <div className="sidebar d-md-none">
        <div className={`sidebar_route ${!sidebar && 'd-none'}`}>
          <div className="cross">
            <span
              class="lnr lnr-cross"
              onClick={() => setSidebar(false)}></span>
          </div>
          <ul className="sidebar_route_list">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/search-medicine">Shop</Link>
            </li> */}
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blogs</Link>
            </li>
            {!props.user ? (
              <li>
                <Link to="/login">Login</Link>
              </li>
            ) : (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
          </ul>
        </div>
      </div>
      {sidebar && (
        <div
          className="responsive_backdrop top-0 d-md-none"
          onClick={() => {
            setSidebar(false);
          }}></div>
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.User.user,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(HamBurger);

import React from 'react';
import { Link } from 'react-router-dom';

function FooterLinks() {
  return (
    <div className="footer_links">
      <div className="container">
        <div className="row">
          <div className="links_container col-6 col-md-3">
            <h5>Get to Know Us</h5>
            <ul className="links">
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>
                <Link to="/about-us">careers</Link>
              </li>
              <li>
                <Link to="/about-us">press releases</Link>
              </li>
              <li>
                <Link to="/about-us">amazon cares</Link>
              </li>
              <li>
                <Link to="/about-us">gift a smile</Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-md-3">
            <h5>Connect with Us</h5>
            <ul className="links">
              <li>
                <Link to="/contact-us">contact us</Link>
              </li>
              <li>
                <Link to="/about-us">careers</Link>
              </li>
              <li>
                <Link to="/about-us">press releases</Link>
              </li>
              <li>
                <Link to="/about-us">amazon cares</Link>
              </li>
              <li>
                <Link to="/about-us">gift a smile</Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-md-3">
            <h5>Make Money With Us</h5>
            <ul className="links">
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>
                <Link to="/about-us">careers</Link>
              </li>
              <li>
                <Link to="/about-us">press releases</Link>
              </li>
              <li>
                <Link to="/about-us">amazon cares</Link>
              </li>
              <li>
                <Link to="/about-us">gift a smile</Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-md-3">
            <h5>Let us Help You</h5>
            <ul className="links">
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>
                <Link to="/about-us">careers</Link>
              </li>
              <li>
                <Link to="/about-us">press releases</Link>
              </li>
              <li>
                <Link to="/about-us">amazon cares</Link>
              </li>
              <li>
                <Link to="/about-us">gift a smile</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;

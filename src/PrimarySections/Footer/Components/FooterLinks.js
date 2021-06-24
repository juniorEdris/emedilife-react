import React from 'react';
import { Link } from 'react-router-dom';

function FooterLinks() {
  const preventEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div className="footer_links">
      <div className="container">
        <div className="row">
          <div className="links_container col-6 col-features">
            <h4 className="mb-2">Company</h4>
            <ul className="links">
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  careers
                </Link>
              </li>
              {/* <li>
                <Link to="/blog">blogs</Link>
              </li> */}
              <li>
                <Link to="#" onClick={preventEvent}>
                  amazon cares
                </Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-features">
            <h4 className="mb-2">Connect with Us</h4>
            <ul className="links">
              {/* <li>
                <Link to="/contact-us">contact us</Link>
              </li> */}
              <li>
                <Link to="#" onClick={preventEvent}>
                  Facebook
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  Youtube
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  Instagram
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-features">
            <h4 className="mb-2">Make Money With Us</h4>
            <ul className="links">
              <li>
                <Link to="#" onClick={preventEvent}>
                  E-Volunteer
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  medishebok
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  partner with emedilife
                </Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-features">
            <h4 className="mb-2">Our Services</h4>
            <ul className="links">
              <li>
                <Link to="#" onClick={preventEvent}>
                  order medicines
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  healthcare services
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  lab tests
                </Link>
              </li>
            </ul>
          </div>
          <div className="links_container col-6 col-features">
            <h4 className="mb-2">Our Policy</h4>
            <ul className="links">
              <li>
                <Link to="#" onClick={preventEvent}>
                  privacy policy
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  customer support policy
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  Assistance policy
                </Link>
              </li>
              <li>
                <Link to="#" onClick={preventEvent}>
                  return policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;

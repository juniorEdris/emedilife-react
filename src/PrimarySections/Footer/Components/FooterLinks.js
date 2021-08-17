/* eslint-disable no-mixed-operators */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function FooterLinks(props) {
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
                  <Link to="/emedilife-career" className=''>careers</Link>
                </li>
                <li>
                  <Link to="/emedilife-care">Emedilife Care</Link>
                </li>
                <li>
                  <Link to="/blog">blogs</Link>
                </li>
              </ul>
            </div>
            <div className="links_container col-6 col-features">
              <h4 className="mb-2">
                <Link to='/contact-us'>Connect with Us</Link>
              </h4>
              <ul className="links">
                <li>
                  <a href="https://www.facebook.com/emedilife" rel='noreferrer' target='_blank'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UC9PTtQCe9U-n0-OsRsYp-Lg" rel='noreferrer' target='_blank'>
                    Youtube
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/emedilife/" rel='noreferrer' target='_blank'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/emedilife/" rel='noreferrer' target='_blank'>Twitter</a>
                </li>
              </ul>
            </div>
            <div className="links_container col-6 col-features">
              <h4 className="mb-2">Make money with us</h4>
              <ul className="links">
                <li>
                  <Link to="/e-volunteer">
                    E-Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/medi-shebok">
                    medishebok
                  </Link>
                </li>
                <li>
                  <Link to="/emedi-partner">
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
                      <Link
                        to={
                          `/Privacy-Policy`}>
                        privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          `/customer-support`}>
                        customer support policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={
                          `/assistant-policy`}>
                        assistant policy
                      </Link>
                    </li>
                     {/*<li>
                      <Link
                        to={
                          `/return-policy`}>
                        return policy
                      </Link>
                    </li> */}
              </ul>
            </div>
          </div>
        </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  links: state.HomeContent.footerlinks,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(FooterLinks);

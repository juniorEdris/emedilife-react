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
      {props.links?.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="links_container col-6 col-features">
              <h4 className="mb-2">Company</h4>
              <ul className="links">
                {/* {props.links?.length > 0 &&
                  company?.map((comp) => (
                    <li>
                      <Link to={`/pages?page_id=${comp.id}`} className={ comp.id === 5 && 'pointer_none' || comp.id === 6 && 'pointer_none'}>{comp.title}</Link>
                    </li>
                  ))} */}
                <li>
                  <Link to="/about-us">about us</Link>
                </li>
                <li>
                  <Link to="/careers" className='pointer_none'>careers</Link>
                </li>
                <li>
                  <Link to="/emedilife-care" className='pointer_none'>Emedilife Care</Link>
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
                {/* <li>
                <Link to="/contact-us">contact us</Link>
              </li> */}
                <li>
                  <a href="https://www.facebook.com/Emedilife-111986904405990">
                    Facebook
                  </a>
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
                  <a href="https://twitter.com/emedilife">Twitter</a>
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
      )}
    </div>
  );
}
const mapStateToProps = (state) => ({
  loading: state.HomeContent.loading,
  links: state.HomeContent.footerlinks,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(FooterLinks);

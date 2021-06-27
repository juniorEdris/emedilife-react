import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function FooterLinks(props) {
  const preventEvent = (e) => {
    e.preventDefault();
  };
  // company lists
  let company = props.links && props.links.slice(0, 3);
  // policies lists
  const policies = props.links && props.links.slice(3, -1);
  return (
    <div className="footer_links">
      {props.links?.length > 0 && (
        <div className="container">
          <div className="row">
            <div className="links_container col-6 col-features">
              <h4 className="mb-2">Company</h4>
              <ul className="links">
                {props.links?.length > 0 &&
                  company?.map((comp) => (
                    <li>
                      <Link to={`/pages?page_id=${comp.id}`}>{comp.title}</Link>
                    </li>
                  ))}
                <li>
                  <Link to="/blog">blogs</Link>
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
                {props.links?.length > 0 &&
                  policies?.map((comp) => (
                    <li>
                      <Link
                        to={
                          comp.id === 7
                            ? `/Privacy-Policy`
                            : `/pages?page_id=${comp.id}`
                        }>
                        {comp.title}
                      </Link>
                    </li>
                  ))}
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

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const PharmacyHeader = (props) => {
  return (
    <div className="pharmacy_header">
      <div className="container">
        <div className="section_header pt-md-4">
          <h4>online pharmacy</h4>
        </div>
        <div className="btn_container">
          <div className="row">
            <div className="col-12 col-md-4 section-one">
              <div className="text">
                <p>Need Medicines on regular basis?</p>
              </div>
              <div className="buttons">
                <Link to="!#" className="btn">
                  Subscribe now
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 section-two">
              <div className="text">
                <p>Have a Prescription</p>
              </div>
              <div className="buttons">
                <Link to="/upload-prescription" className="btn">
                  Upload your prescription
                </Link>
              </div>
            </div>
            <div className="col-12 col-md-4 section-three">
              <div className="text">
                <p>Dont Have a Prescription</p>
              </div>
              <div className="buttons">
                <Link to="!#" className="btn">
                  get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyHeader);

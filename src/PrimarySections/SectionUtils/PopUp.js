import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './popup.css';

export const PopUp = (props) => {
  return (
    <div>
      <div className=" primary_popup_wrapper">
        <div className="row no-gutters justify-content-center">
          <div className="inner_popup_wrapper col-7 ">
            <div className="primary_close_box" onClick={props.close}>
              &times;
            </div>
            <div className="popup_header">
              <div className="success_header">
                <h4 className="text-capitalize">{props.response}</h4>
              </div>
            </div>
            <div className="popup_footer">
              {/* <img
                    src="./assets/images/primary/logo.png"
                    width={70}
                    alt="logo"
                  /> */}
              <div className="primary_back_btn back_btn">
                <Link
                  to="#"
                  onClick={props.close}
                  className="btn btn-danger col-8 col-md-4 mt-3">
                  Close
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="primary_popup_backdrop" onClick={props.close}></div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);

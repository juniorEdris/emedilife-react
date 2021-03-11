import React from 'react';
import { connect } from 'react-redux';

const ContactDetails = (props) => {
  return (
    <div>
      <div className="row contact_box_wrapper">
        <div className="col-md-4 mb-md-3">
          <div className="contact_box ">
            <div className="contact_box_header">
              <img src="./assets/svg/icons/phone.svg" alt="phone" />
              <h6>PHONE</h6>
            </div>
            <div className="contact_box_body">
              <div>Toll Free: 111 222 333 555</div>
              <div>Fax: 111 222 333 555</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-md-3">
          <div className="contact_box">
            <div className="contact_box_header">
              <img src="./assets/svg/icons/email.svg" alt="phone" />
              <h6>EMAIL</h6>
            </div>
            <div className="contact_box_body">
              <div>Medipathy@mail.com</div>
              <div>Support@medipathy.com</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3 ">
          <div className="contact_box">
            <div className="contact_box_header">
              <img src="./assets/svg/icons/address.svg" alt="phone" />
              <h6>ADDRESS</h6>
            </div>
            <div className="contact_box_body">
              <div>No #45/C, East Nasirabad, Baizid , Chattagram</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);

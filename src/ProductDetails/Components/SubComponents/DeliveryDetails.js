import React from 'react';
import { connect } from 'react-redux';

const DeliveryDetails = (props) => {
  return (
    <div className="delivery_details">
      <div className="head row">
        <h4>Delivery Option</h4>
        <img className="icon" src={`./assets/svg/icons/info.svg`} alt="" />
      </div>
      <div className="body row">
        <img
          className="icon"
          src={`./assets/svg/icons/location.svg`}
          alt={'edit'}
        />
        <p className="delivery_address">
          RF Zohura Tower, Chittagong Computer Market (Ground floor), SK Mojib
          Road, Agrabad, Chowmuhani
        </p>
        <img
          className="icon delivery_edit_icon"
          src={`./assets/svg/icons/Icon edit.svg`}
          alt={'edit'}
        />
      </div>
      <div className="details_footer">
        <h5>Return and Warrenty Policy</h5>
        <ul>
          <li>
            <img
              className="footer_icon icon"
              src={`./assets/svg/icons/checkmark-1.svg`}
              alt={'100% authentic'}
            />
            100% authentic
          </li>
          <li>
            <img
              className="footer_icon icon"
              src={`./assets/svg/icons/checkmark-1.svg`}
              alt={'14 days Easy Return'}
            />
            14 days Easy Return
          </li>
          <li>
            <img
              className="footer_icon icon"
              src={`./assets/svg/icons/map-sheild.svg`}
              alt={'Warrenty not available'}
            />
            Warrenty not available
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails);

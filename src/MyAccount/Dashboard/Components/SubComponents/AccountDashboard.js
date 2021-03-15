import React from 'react';
import { connect } from 'react-redux';
import AccountInfo from './AccountInfo';
import OrderHistory from './AccountOrderHistory';

const AccountDashboard = (props) => {
  return (
    <div className="account_dashboard">
      <div className="acc_dash_heading">
        <h5>my dashboard</h5>
      </div>
      <div className="pl-4 pr-4">
        <div className="account_msg">
          <img src="./assets/svg/icons/acc_qoutes.svg" alt="" />
          <p>
            Hello Raghib, <br />
            From your My Account Dashboard you have the ability to view a
            snapshopt of your recent account activity and update your account
            information. Select a link below to view or edit information.
          </p>
        </div>
      </div>
      {/* order history start here */}
      <OrderHistory />
      {/* Account information start here */}
      <AccountInfo />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDashboard);

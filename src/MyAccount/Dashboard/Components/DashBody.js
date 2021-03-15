import React from 'react';
import { connect } from 'react-redux';
import AccountDashboard from './SubComponents/AccountDashboard';
import EditInformation from './SubComponents/EditInformation';
import MyOrders from './SubComponents/MyOrders';

const DashBody = (props) => {
  return (
    <div className="dashboard_body">
      {props.tab === 'dashboard' && <AccountDashboard />}
      {props.tab === 'account' && <EditInformation />}
      {props.tab === 'order' && <MyOrders />}
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashBody);

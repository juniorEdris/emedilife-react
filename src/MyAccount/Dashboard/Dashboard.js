import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DashBody from './Components/DashBody';
import DashSidebar from './Components/DashSidebar';
import { getCartItems } from '../../Redux/Action/CartProductsAction';
import './dashboard.css';

const Dashboard = (props) => {
  useEffect(() => {
    props.getCartItems();
  }, []);
  const [tab, setTab] = useState('dashboard');
  return (
    <div className="dashboard_wrapper container-md-fluid">
      <div className="row">
        <div className="col-md-3 p-md-2">
          <DashSidebar tab={tab} setTab={setTab} />
        </div>
        <div className="col-md-9 p-md-2">
          <DashBody tab={tab} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

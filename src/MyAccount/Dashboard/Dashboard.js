import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DashBody from './Components/DashBody';
import DashSidebar from './Components/DashSidebar';
import { getCartItems } from '../../Redux/Action/CartProductsAction';
import './dashboard.css';
import { getUserInfo } from '../../Redux/Action/GetUserInfoAction';
import { getOrderList } from '../../Redux/Action/OrderListAction';

const Dashboard = (props) => {
  useEffect(() => {
    props.getCartItems();
    props.User && props.getUserInfo(); //!props.info &&
    props.User && props.getOrderList(); //!props.orders.length > 1 &&
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

const mapStateToProps = (state) => ({
  User: state.User.user,
  info: state.UserInfo.info,
  orders: state.OrderList.orders,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
  getUserInfo: () => dispatch(getUserInfo()),
  getOrderList: () => dispatch(getOrderList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

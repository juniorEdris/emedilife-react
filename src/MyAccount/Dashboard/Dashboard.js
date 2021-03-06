import React, { memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DashBody from './Components/DashBody';
import DashSidebar from './Components/DashSidebar';
import { getCartItems } from '../../Redux/Action/CartProductsAction';
import './dashboard.css';
import { getUserInfo } from '../../Redux/Action/GetUserInfoAction';
import { getOrderList } from '../../Redux/Action/OrderListAction';
import SpinLoader from '../../PrimarySections/SectionUtils/SpinLoader';
import { guestCartItem } from '../../Redux/Action/BasketAction';
import { guestWishItem } from '../../Redux/Action/WishListAction';
import {toTheTop} from '../../PrimarySections/SectionUtils/WindowTop';

const Dashboard = (props) => {
  const [tab, setTab] = useState('dashboard');
  useEffect(() => {
    toTheTop()
    props.getOrderList();
    props.User && props.getUserInfo();
    props.User && props.getOrderList();
  }, [tab]);
  useEffect(() => {
    props.localCartList?.length > 0 && props.guestCartSubmit();
    props.localWishList?.length > 0 && props.guestWishSubmit();
     props.getCartItems();
  }, []);
  const [orderId, setOrderId] = useState('');
  return (
    <div className="dashboard_wrapper container-md-fluid">
      {props.logOutRequest && <SpinLoader />}
      {props.loading && <SpinLoader />}
      <div className="row">
        <div className="col-md-4 col-xl-2 p-md-2">
          <DashSidebar tab={tab} setTab={setTab} />
        </div>
        <div className="col-md-8 col-xl-10 p-md-2">
          <DashBody
            tab={tab}
            setTab={setTab}
            orderId={orderId}
            setOrderId={setOrderId}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  User: state.User.user,
  info: state.UserInfo.info,
  orders: state.OrderList.orders,
  loading: state.AccountInfo.storeInfoloading,
  response: state.AccountInfo.storeInfoStatus,
  localCartList: state.Basket.localBasket,
  localWishList: state.Wishlist.localWishlist,
  geustListloading: state.Basket.loading,
  logOutRequest: state.User.logOutRequest,
});

const mapDispatchToProps = (dispatch) => ({
  getCartItems: () => dispatch(getCartItems()),
  getUserInfo: () => dispatch(getUserInfo()),
  getOrderList: () => dispatch(getOrderList()),
  guestCartSubmit: (array) => dispatch(guestCartItem(array)),
  guestWishSubmit: (array) => dispatch(guestWishItem(array)),
});

export default connect(mapStateToProps, mapDispatchToProps)(memo(Dashboard));

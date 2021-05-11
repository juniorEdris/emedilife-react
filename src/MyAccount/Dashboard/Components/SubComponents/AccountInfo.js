import Skeleton from '@yisheng90/react-loading';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LogOutAction } from '../../../../Redux/Action/UserAction';

const AccountInfo = (props) => {
  return (
    <div className="account_information">
      <div className="order_header pl-4 pr-4">
        <span>Account Information</span>
        <Link to="#" onClick={() => props.setTab('account')}>
          edit
        </Link>
      </div>
      <h5 className="pl-4 pr-4">Contact Information</h5>
      <div className="">
        <div className="account_details">
          <div className="pt-3 pb-3">
            {props.loading ? (
              <Skeleton width={`100%`} height={`50px`} />
            ) : (
              <h3>{props.info?.name}</h3>
            )}
          </div>
          <div className="">
            {props.loading ? (
              <Skeleton width={'100%'} height={30} />
            ) : (
              <span>{props.info?.email}</span>
            )}
          </div>
          <div className="">
            {props.loading ? (
              <Skeleton width={'100%'} height={30} />
            ) : (
              <Link to="#">Change Password</Link>
            )}
          </div>

          {/* <div className="">
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                props.logOut();
              }}>
              Log out
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(LogOutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);

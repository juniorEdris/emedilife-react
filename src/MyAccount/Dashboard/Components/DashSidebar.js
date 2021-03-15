import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const DashSidebar = (props) => {
  // const tabChange = (e)=>{
  //   e.preventDefault()
  //   props.setTab()
  // }
  return (
    <div className="dashSidebar">
      <div className="account_nav">
        <div className="acc_heading">
          <h5>My Account</h5>
        </div>
        <div className="dash_nav_list">
          <ul>
            <li>
              <Link
                to="#"
                className={props.tab === 'dashboard' && 'active'}
                onClick={() => props.setTab('dashboard')}>
                Account Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={props.tab === 'account' && 'active'}
                onClick={() => props.setTab('account')}>
                Account Information
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={props.tab === 'order' && 'active'}
                onClick={() => props.setTab('order')}>
                My Order
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="browse_nav">
        <div className="acc_heading">
          <h5>over the counter</h5>
        </div>
        <div className="dash_nav_list browse_nav_list">
          <ul>
            <li>
              <Link to="#" className="">
                baby & mom
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                baby daipers
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                female hygene
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                covid-19
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                dental & oral care
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                diabetic
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                diabetic accessories
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                diabetic care kits
              </Link>
            </li>
            <li>
              <Link to="#" className="">
                multivitamin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DashSidebar);

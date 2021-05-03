import { Link } from 'react-router-dom';

const AccountNav = (props) => {
  return (
    <div className="">
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
    </div>
  );
};

export default AccountNav;

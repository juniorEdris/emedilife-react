import { Link } from 'react-router-dom';

const WishListIcon = () => {
  return (
    <>
      <Link to="/wishlist" className="header__link">
        <div className="header__option">
          <span className="header__option__lineOne">
            <img
              src="./assets/svg/icons/nav-wishlist.svg"
              alt="wishlist icon"
            />{' '}
            Wishlist
          </span>
        </div>
      </Link>
    </>
  );
};

export default WishListIcon;

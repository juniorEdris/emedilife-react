import { connect } from 'react-redux';
import WishlistBody from './Components/WishlistBody';
import WishlistHeader from './Components/WishlistHeader';
import './wishlist.css';
const WishList = () => {
  return (
    <div className="wishlist_wrapper">
      <div className="container-md-fluid ">
        <div className="wrapper_body w-100">
          <WishlistHeader />
          <WishlistBody />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(WishList);

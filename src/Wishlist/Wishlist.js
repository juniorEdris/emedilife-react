import { connect } from 'react-redux';
import './wishlist.css';
const WishList = () => {
  return (
    <div className="wishlist_wrapper">
      <div className="container-md-fluid ">
        <div className="wrapper_body w-100">
          <div className="wishlist_header">
            <div className="wishlist_page_icon">
              <img
                src="./assets/svg/icons/wishlist-header-icon.svg"
                alt="wishlist page header icon"
              />
            </div>
            <h1 className="wishlist_header">my wishlist</h1>
          </div>
          <div className="wishlist_body">
            <table className="table wishlist_table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Product</th>
                  <th scope="col">Unit price</th>
                  <th scope="col">Stock status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="./assets/svg/icons/Icon-bin.svg"
                      alt="delete-wishlist-item"
                      className="wish_item_delete"
                    />
                  </td>
                  <td>
                    <div className="row align-items-center">
                      <div className="wishlist_item_image">
                        <img
                          src="./assets/images/products/img-1.png"
                          alt="name"
                        />
                      </div>
                      <div className="wishlist_item_name">
                        <span>Omron HEM 7120 Fully Automatic </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="row ">
                      <span className="previous_price mr-1">
                        <del> ৳100.00</del>
                      </span>

                      <span className="previous_price">৳80.00</span>
                    </div>
                  </td>
                  <td>in stock</td>
                  <td>
                    <button className="btn btn-primary col-8">
                      add to cart
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(WishList);

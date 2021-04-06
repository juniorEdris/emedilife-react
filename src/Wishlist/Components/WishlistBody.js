import { connect } from 'react-redux';

const WishlistBody = (props) => {
  const Styles = {
    minWidth: '400px',
  };
  return (
    <div className="wishlist_body">
      <table class="table wishlist_table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Product name</th>
            <th scope="col">Unit price</th>
            <th scope="col">Stock status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <div className="col wish_item_delete">
                <i className="far fa-trash-alt"></i>
              </div>
            </th>
            {/* <td>
              <div className="col wish_item_delete">
                <i className="far fa-trash-alt"></i>
              </div>
            </td> */}
            <td style={Styles}>
              <div className="col-12">
                <div className="row align-items-center flex-nowrap">
                  <div className="wish_item_image col-3">
                    <img
                      src="./assets/images/products/img-1.png"
                      alt="images"
                    />
                  </div>
                  <div className="wish_item_name col-9">
                    Omron HEM 7120 Fully Automatic
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="wish_item_prices">
                <div className="row no-gutters justify-content-center flex-nowrap">
                  <span className="mr-1">
                    <del>৳188</del>
                  </span>
                  <span>৳150.00</span>
                </div>
              </div>
            </td>
            <td>
              <div className="col-12 text-success">in stock</div>
            </td>
            <td>
              <button className="btn btn-addcart text-light col-12">
                <i className="fas fa-cart-plus mr-2"></i>{' '}
                <span className="d-none d-md-inline">add to cart</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WishlistBody);

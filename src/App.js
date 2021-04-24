import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Header from './PrimarySections/Header';
import NoRoutes from './NoRoutes';
import Home from './Home';
import './responsive.css';
import BackToTop from './PrimarySections/SectionUtils/BackToTop';
import Footer from './PrimarySections/Footer';
import ProductDetails from './ProductDetails';
import UserEntry from './MyAccount/UserActivity/index';
import Dashboard from './MyAccount/Dashboard/Dashboard';
import PrescriptionUpload from './PrescriptionUpload/PrescriptionUpload';
import SearchMedicine from './SearchMedicine/Search';
import AboutUs from './AboutUs/AboutUs';
import CartIcon from './PrimarySections/CartIcon/CartIcon';
import ContactUs from './ContactUs/ContactUs';
// import { User } from './PrimarySections/Utility';
import CheckOut from './CheckOut/CheckOut';
import OrderInformation from './OrderInformation/OrderInformation';
import { connect } from 'react-redux';
import { getCartItems } from './Redux/Action/CartProductsAction';
import { useEffect } from 'react';
import Blog from './Blog/Blog';
import WishList from './Wishlist/Wishlist';
import { OrderNotification } from './OrderNotify/OrderNotification';
import BlogDetails from './BlogDetails';

// slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GetHomeContents } from './Redux/Action/HomeProductsAction';

function App(props) {
  useEffect(() => {
    props.getHomeContents();
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productdetails" component={ProductDetails} />
          {/* <Route path="/single-blog" component={<BlogDetails />} /> */}
          <Route path="/upload-prescription" component={PrescriptionUpload} />
          <Route path="/login">
            {!props.User ? <UserEntry /> : <Redirect to="/dashboard" />}
          </Route>
          <Route path="/dashboard">
            {!props.User ? <Redirect to="/login" /> : <Dashboard />}
          </Route>
          <Route path="/search-medicine" component={SearchMedicine} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/check-out" component={CheckOut} />
          <Route path="/order-info" component={OrderInformation} />
          <Route path="/blog" component={Blog} />
          <Route path="/wishlist" component={WishList} />
          <Route path="/ordersuccess" component={OrderNotification} />
          <Route exact path="*" component={NoRoutes} />
        </Switch>
        <CartIcon />
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  User: state.User.user,
});
const mapDispatchToProps = (dispatch) => ({
  getHomeContents: () => dispatch(GetHomeContents()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

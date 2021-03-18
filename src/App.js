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
import { User } from './PrimarySections/Utility';
import CheckOut from './CheckOut/CheckOut';
import OrderInformation from './OrderInformation/OrderInformation';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productdetails" component={ProductDetails} />
          <Route path="/upload-prescription" component={PrescriptionUpload} />
          <Route path="/login">
            {!User ? <UserEntry /> : <Redirect to="/dashboard" />}
          </Route>
          <Route path="/dashboard">
            {User ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/search-medicine" component={SearchMedicine} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/check-out" component={CheckOut} />
          <Route path="/order-info" component={OrderInformation} />
          <Route exact path="*" component={NoRoutes} />
        </Switch>
        <CartIcon />
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

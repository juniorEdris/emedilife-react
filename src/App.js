import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './PrimarySections/Header';
import NoRoutes from './NoRoutes';
import Home from './Home/Index';
import './responsive.css';
import BackToTop from './PrimarySections/SectionUtils/BackToTop';
import Footer from './PrimarySections/Footer';
import ProductDetails from './ProductDetails';
import UserEntry from './MyAccount/UserActivity/index';
import Dashboard from './MyAccount/Dashboard';
import PrescriptionUpload from './PrescriptionUpload/PrescriptionUpload';
import SearchMedicine from './SearchMedicine/Search';
import AboutUs from './AboutUs/AboutUs';
import CartIcon from './PrimarySections/CartIcon/CartIcon';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productdetails" component={ProductDetails} />
          <Route path="/upload-prescription" component={PrescriptionUpload} />
          <Route path="/login" component={UserEntry} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/search-medicine" component={SearchMedicine} />
          <Route path="/about-us" component={AboutUs} />
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

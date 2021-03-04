import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './PrimarySections/Header';
import NoRoutes from './NoRoutes';
import Home from './Home';
import './responsive.css';
import BackToTop from './PrimarySections/SectionUtils/BackToTop';
import Footer from './PrimarySections/Footer';
import ProductDetails from './ProductDetails';
import UserEntry from './MyAccount/UserActivity/index';
import Dashboard from './MyAccount/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/productdetails" component={ProductDetails} />
          <Route path="/login" component={UserEntry} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="*" component={NoRoutes} />
        </Switch>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

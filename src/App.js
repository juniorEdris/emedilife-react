import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './PrimarySections/Header'
import NoRoutes from './NoRoutes'
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='*' component={ NoRoutes }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

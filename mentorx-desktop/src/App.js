import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Result from './components/result/Result';
import DetailedView from './components/detailed-view/DetailedView';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loader from './components/loader/Loader';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Loader/>
          <Home />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
        <Route path="/result/:id">
          <DetailedView />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;

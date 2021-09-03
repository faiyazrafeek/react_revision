import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Result from './components/result/Result';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/result">
        <Result />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;

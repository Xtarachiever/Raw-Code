import React from 'react';
import './App.css';
import Home from './Home';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import EachDetails from './EachDetails';
import Downloader from './downloader';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:name" component={EachDetails}/>
          <Route exact path="/:name/downloader" component={Downloader}/>
        </Switch>
        {/* <Redirect to="/"/> */}
      </div>
    </Router>
  );
}
export default App;

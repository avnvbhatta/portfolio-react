import React from 'react';
import './App.scss';
import Home from './components/home/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProjectDetail from './components/projectdetail/projectdetail';

function App() {
  return (
    <Router>
      
        <Switch>
          <Route path="/projectdetail/:projectName">
            <ProjectDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';

import { Provider } from './globalContext'

function App() {
  return (
<Provider>
  <Router>
   <div>
     <NavBar color='dark' />
     <Switch>
       <Route exact path="/">
         <Landing /> 
      </Route>
       <Route exact path="/home">
         <Home />
       </Route>
     </Switch>
  </div>
</Router>
</Provider>
    
  )
}

export default App;

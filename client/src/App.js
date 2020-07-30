import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
   <div>
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
  )
}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import ToolView from './components/ToolView/ToolView';
import { Provider } from './globalContext';
import About from './components/About';
import Post from './components/Post';

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
       <Route exact path="/about">
         <About />
       </Route>
       <Route exact path="/post">
         <Post />
       </Route>
       <Route exact path="/tools/:id" component={ToolView}>
         <ToolView />
       </Route>
     </Switch>
  </div>
</Router>
</Provider>
    
  )
}

export default App;

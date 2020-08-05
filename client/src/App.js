import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Search from './components/Search';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import ToolView from './components/ToolView';
import { Provider } from './globalContext';
import About from './components/About';
import Post from './components/Post';
import Cart from './components/Cart';
import OwnerView from './components/OwnerView';
function App() {
  return (
<Provider>
  <Router>
   <div>
     <NavBar color='dark' />
     <Switch>
       <Route exact path="/about">
         <About />
       </Route>
       <Route exact path="/Search">
         <Search />
       </Route>
       <Route exact path="/post">
         <Post />
       </Route>
       <Route exact path="/">
         <Landing /> 
      </Route>
       <Route exact path="/tools/:id" component={ToolView}>
         <ToolView />
       </Route>
       <Route exact path="/owner/:id" component={OwnerView}>
         <ToolView />
       </Route>
       <Route exact path="/cart">
         <Cart /> 
      </Route>
     </Switch>
  </div>
</Router>
</Provider>
    
  )
}

export default App;

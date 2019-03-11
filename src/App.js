import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Cart from "./Cart";
import Recipe from "./Recipe";

class App extends Component {
  render() {
      return (
          <BrowserRouter>
              <div className="App">
                  <Navbar/>
                  <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/cart" component={Cart}/>
                      <Route path="/recipe" component={Recipe}/>
                  </Switch>
              </div>
          </BrowserRouter>
      );
  }
}

export default App;

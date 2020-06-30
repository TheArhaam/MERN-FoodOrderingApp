import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { store } from "./store";
import { loadUser } from "./actions/authActions";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/home";
import Menu from "./components/Menu/menu";
import Cart from "./components/Cart/cart";
import AddDish from "./components/AddDish/adddish";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile"
import { BrowserRouter as Router, Route } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5000/";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/menu/:cuisine" component={Menu} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/dish/add" component={AddDish} />
          <Route exact path="/profile" component={Profile} />
        </Router>
      </div>
    );
  }
}

export default App;

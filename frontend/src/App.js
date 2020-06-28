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
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:5000/";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/menu/:cuisine" component={Menu}/>
        <Route exact path="/cart" component={Cart}/>
      </Router>
    );
  }
}

export default App;

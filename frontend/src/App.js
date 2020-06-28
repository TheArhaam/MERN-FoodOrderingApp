import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { store } from "./store";
import { loadUser } from "./actions/authActions";
axios.defaults.baseURL = "http://localhost:5000/";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return <div className="App">YOYO</div>;
  }
}

export default App;

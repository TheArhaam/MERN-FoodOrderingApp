// JUST THE ROOT COMPONENT

import React, { Component } from "react";
import "./home.css"
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="HomeFULL">
                <div className="HomeInDiv">
                    <h1>Welcome!</h1>
                    <h2>Check out our menu by selecting a cuisine!</h2>
                </div>
            </div>
        )
    }
}

export default Home;
import React, { Component } from "react";
import "./menu.css"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisine: this.props.match.params.cuisine,
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({ cuisine: newProps.match.params.cuisine })
    }

    render() {
        return (
            <div className="MenuFULL">
                <div className="MenuInDiv">
                    <h1>
                        {this.state.cuisine}
                    </h1>
                </div>
            </div>
        )
    }
}

export default Menu;
import React, { Component } from "react";

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
            <div>
                MENU: {this.state.cuisine}
            </div>
        )
    }
}

export default Menu;
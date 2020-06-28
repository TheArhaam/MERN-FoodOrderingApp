import React, { Component } from "react";
import "./menu.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisine: this.props.match.params.cuisine,
            loading: true,
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
                    {this.state.loading ? <Loader type="Oval" color="rgb(79, 101, 121)" height={100} width={100} /> : null}

                </div>
            </div>
        )
    }
}

export default Menu;
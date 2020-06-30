// COMPONENT THAT DISPLAYS LOGIN & REGISTER COMPONENT

import React, { Component } from "react";
import Dish from "../Dish/dish";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./profile.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import axios from 'axios'
import { store } from "../../store";
import { loadUser } from "../../actions/authActions";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions"
import WelcomeProfile from "./welcomeprofile"

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ProfileFULL">
                <div className="ProfileInDiv">
                    {this.props.user ? <WelcomeProfile>{this.props.user}</WelcomeProfile> :
                        <div>
                            <Login />
                            <Register />
                        </div>}

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);

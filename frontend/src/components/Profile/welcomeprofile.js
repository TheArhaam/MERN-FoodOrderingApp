
import React, { Component } from "react";
import axios from 'axios'
import { store } from "../../store";
import { connect } from "react-redux";
import { logout } from "../../actions/authActions"
import "./profile.css"

class WelcomeProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: true
        }
        this.getData();
    }

    getData = async () => {
        const url = "/order/" + this.props.user.email
        const token = this.props.token;
        const config = {
            headers: {
                "Content-type": "application/json",
                "x-auth-token": `${token}`
            },
        };
        await axios.get(url, config)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    orders: response.data,
                    loading: false,
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleLogout = () => {
        store.dispatch(logout());
    }

    render() {
        return (
            <div className="WelcomeProfileFULL">
                <div className="WelcomeProfileInDiv">
                    <h1>Welcome {this.props.children.name}!</h1>
                    <button className="logoutBttn" onClick={this.handleLogout}>LOGOUT</button>
                    <h2>Previous Orders: </h2>
                    {
                        this.state.loading ?
                            "loading" :
                            this.state.orders.map((order) => {
                                var date = new Date(order.date);
                                                                
                                return (
                                    <div>
                                        <br />===========================
                                        <br /> <b>ORDER</b>
                                        <br />===========================
                                        <br /> <b>Date: </b> {date.toDateString()}
                                        <br /> <b>Dishes: </b>
                                        {order.dishes.map((dish) => {
                                            return (
                                                <div>{dish.dishName}</div>
                                            )
                                        })}
                                        <br /> <b>Total Cost: </b>
                                        {order.totalCost}
                                    </div>
                                )
                            })
                    }

                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    token: state.auth.token
});

export default connect(mapStateToProps)(WelcomeProfile);
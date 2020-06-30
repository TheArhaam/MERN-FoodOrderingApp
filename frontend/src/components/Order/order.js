import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom"
import { store } from "../../store"
import axios from "axios";
import { clearCart } from "../../actions/cartActions"
import "./order.css";

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placed: false,
        }
    }

    handleConfirm = () => {
        var dishNames = [];
        this.props.items.forEach((item) => { dishNames.push(item.dishName) });
        const totalCost = this.props.totalCost;
        const userEmail = this.props.user.email;
        const newOrder = { dishNames, totalCost, userEmail };

        const token = this.props.token;
        const config = {
            headers: {
                "Content-type": "application/json",
                "x-auth-token": `${token}`
            },
        };

        axios.post("/order/new", newOrder, config)
            .then((response) => {
                alert(response.data);
                store.dispatch(clearCart());
                this.setState({ placed: true });
            })
            .catch((err) => {
                alert(err);
            })


    }

    render() {
        if (!this.state.placed) {
            return (
                <div className="OrderFULL">
                    <div className="OrderInDiv">
                        <h1>PLACE ORDER</h1>
                        <b>Name: </b>{this.props.user.name} <br />
                        <b>Phone number:</b>{this.props.user.phoneNumber} <br />
                        <b>Address: </b>{this.props.user.address} <br />
                        <b>Payment mode: </b> COD <br />
                        <button class="confirmBttn" onClick={this.handleConfirm}>CONFIRM</button>

                    </div>
                </div>
            );
        }
        else {
            return <Redirect to="/profile" />
        }
    }
}

function mapStateToProps(state) {
    return ({
        items: state.cart.dishes,
        totalCost: state.cart.totalCost,
        user: state.auth.user,
        token: state.auth.token
    })
}

export default connect(mapStateToProps)(Order);
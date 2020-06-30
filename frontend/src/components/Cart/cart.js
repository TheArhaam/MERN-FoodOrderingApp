// COMPONENT THAT DISPLAYS THE ITEMS AVAILABLE IN THE CART

import React, { Component } from "react";
import { connect } from 'react-redux';
import { store } from "../../store"
import { clearCart } from "../../actions/cartActions"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/cartitem"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import "./cart.css"

class Cart extends Component {
    constructor(props) {
        super(props);
        this.handleClearCart = this.handleClearCart.bind(this);
        this.handlePlaceOrder = this.handlePlaceOrder.bind(this);
    }

    handleClearCart = () => {
        store.dispatch(clearCart());
    }

    handlePlaceOrder = () => {
        if (this.props.user == null) {

        }
    }

    render() {
        return (
            <div className="CartFULL">
                <h1>Food Cart</h1>
                <div className="CartInDiv">
                    {
                        this.props.loading ? <Loader type="Oval" color="rgb(79, 101, 121)" height={100} width={100} /> :
                            this.props.items.map((item) => {
                                return (<CartItem>{item}</CartItem>);
                            })
                    }
                    {
                        this.props.items.length != 0 ?
                            <button className="clearCartBttn" onClick={this.handleClearCart}>CLEAR CART</button>
                            :
                            <div style={{"padding":"10px"}}>
                                NO ITEMS ADDED
                            </div>
                    }
                </div>
                <h2><b>Total Price: </b>{this.props.totalCost}</h2>
                <br />
                {/* <button className="placeOrderBttn" onClick={this.handlePlaceOrder}>PLACE ORDER</button> */}
                {
                    this.props.items.length != 0 ?
                        <Link className="linkBttn" to={this.props.user ? "/order" : "/profile"} >
                            <div className="placeOrderBttn">
                                PLACE ORDER
                    </div>
                        </Link> : null
                }
            </div>
        )
    }
}

// MAPS THE REDUX CART STATE TO PROPS OF CART
// THIS ALLOWS RE-RENDERING WHEN STATE IS CHANGED
function mapStateToProps(state) {
    return ({
        items: state.cart.dishes,
        totalCost: state.cart.totalCost,
        user: state.auth.user,
    })
}

export default connect(mapStateToProps)(Cart);
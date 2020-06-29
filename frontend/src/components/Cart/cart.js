import React, { Component } from "react";
import PropTypes from "prop-types";
import { store } from "../../store";
import { connect } from 'react-redux';
import CartItem from "../CartItem/cartitem"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import "./cart.css"

class Cart extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     items: [],
        //     totalCost: 0,
        //     loading: true,
        // }
    }

    // componentDidMount() {
    //     const cartState = store.getState().cart;
    //     const totalCost = cartState.totalCost;
    //     const dishes = cartState.dishes;
    //     this.setState({
    //         items: dishes,
    //         totalCost,
    //         loading: false
    //     }, () => {
    //         // console.log(this.state)
    //     });
    // }

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
                </div>
                <h2><b>Total Price: </b>{this.props.totalCost}</h2>
            </div>
        )
    }
}

Cart.propTypes = {
    items: PropTypes.array,
    totalCost: PropTypes.number,
    loading: PropTypes.bool
}

function mapStateToProps(state, ownProps) {
    return ({
        items: state.cart.dishes,
        totalCost: state.cart.totalCost,
        loading: false,
    })
}

export default connect(mapStateToProps)(Cart);
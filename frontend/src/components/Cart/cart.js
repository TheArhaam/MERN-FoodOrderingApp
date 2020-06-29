// COMPONENT THAT DISPLAYS THE ITEMS AVAILABLE IN THE CART

import React, { Component } from "react";
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
                {/* IMPLEMENT CLEAR CART BUTTON */}
            </div>
        )
    }
}

// DOESNT SEEM TO HAVE ANY PURPOSE HERE
// Cart.propTypes = {
//     items: PropTypes.array,
//     totalCost: PropTypes.number,
//     loading: PropTypes.bool
// }

// MAPS THE REDUX CART STATE TO PROPS OF CART
// THIS ALLOWS RE-RENDERING WHEN STATE IS CHANGED
function mapStateToProps(state) {
    return ({
        items: state.cart.dishes,
        totalCost: state.cart.totalCost,
        loading: false,
    })
}

export default connect(mapStateToProps)(Cart);
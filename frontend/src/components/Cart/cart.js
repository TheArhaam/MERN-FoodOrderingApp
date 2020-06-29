import React, { Component } from "react";
import { store } from "../../store";
import CartItem from "../CartItem/cartitem"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import "./cart.css"

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            totalCost: 0,
            loading: true,
        }
    }

    componentDidMount() {
        const cartState = store.getState().cart;
        const totalCost = cartState.totalCost;
        const dishNames = cartState.dishNames;
        this.setState({
            items: dishNames,
            totalCost,
            loading: false
        }, () => {
            // console.log(this.state)
        });
    }

    render() {
        return (
            <div className="CartFULL">
                <h1>Food Cart</h1>
                <div className="CartInDiv">
                    {
                        this.state.loading ? <Loader type="Oval" color="rgb(79, 101, 121)" height={100} width={100} /> :
                            this.state.items.map((item) => {
                                return (<CartItem>{item}</CartItem>);
                            })
                    }
                </div>
                <h2><b>Total Price: </b>{this.state.totalCost}</h2>
            </div>
        )
    }
}

export default Cart;
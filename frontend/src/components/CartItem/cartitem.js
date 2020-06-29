// COMPONENT FOR EACH CART ITEM

import React, { Component } from "react";
import { store } from "../../store"
import "./cartitem.css";
import { removeDish } from "../../actions/cartActions"

class CartItem extends Component {
    constructor(props) {
        // console.log(props.children);
        super(props);
        this.state = {
            dishName: `${props.children.dishName}`,
            price: `${props.children.price}`,
        }
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem = () => {
        const dish = {
            dishName: `${this.state.dishName}`,
            price: `${this.state.price}`
        }
        store.dispatch(removeDish(dish))
    }

    render() {
        return (
            <div className="cartItemFULL">
                <table className="itemTable">
                    <tr>
                        <td className="tdItem">
                            {this.state.dishName}
                        </td>
                        <td className="tdPrice">
                            <b>Price:</b> {this.state.price}
                        </td>
                        <td className="tdBttn">
                            <button className="bttn" onClick={this.removeItem} ><i className="material-icons">delete_forever</i></button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default CartItem;
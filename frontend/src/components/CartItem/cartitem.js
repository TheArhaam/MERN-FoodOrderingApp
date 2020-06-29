import React, { Component } from "react";
import { store } from "../../store"
import "./cartitem.css";
import { removeDish } from "../../actions/cartActions"

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: `${props.children}`
        }
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem = () => {
        // store.dispatch(removeDish(this.state))
        // NEED A WAY TO SAVE DISH WITH PRICE
    }

    render() {
        return (
            <div className="cartItemFULL">
                <table className="itemTable">
                    <tr>
                        <td className="tdItem">
                            {this.state.dish}
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
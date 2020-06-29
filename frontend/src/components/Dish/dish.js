import React, { Component } from "react";
import { store } from "../../store";
import { addDish } from "../../actions/cartActions"
import "./dish.css"

class Dish extends Component {
    constructor(props) {
        super(props);
        const { id, dishName, cuisine, description, imageUrl, price } = props.children
        this.state = {
            id, dishName, cuisine, description, imageUrl, price
        }
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart = () => {
        store.dispatch(addDish(this.state.dishName, this.state.price))
    }

    render() {
        const { id, dishName, cuisine, description, imageUrl, price } = this.state
        return (
            <div className="dishCard">
                <div className="inDiv">
                    <h3>{dishName}</h3>
                    <div className="imageDiv">
                        {/* <center> */}
                        <img src={imageUrl} alt={dishName} />
                        {/* </center> */}
                    </div>
                    <p>{description}</p>
                    <div className="tableDiv">
                        {/* <center> */}
                        <table>
                            <tr>
                                <td>
                                    <p><b>Price:</b> {price}</p>
                                </td>
                                <td>
                                    <button onClick={this.addToCart}>+ Add to Cart</button>
                                </td>
                            </tr>
                        </table>
                        {/* </center> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dish;
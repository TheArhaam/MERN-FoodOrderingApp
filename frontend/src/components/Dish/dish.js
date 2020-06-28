import React, { Component } from "react";
import "./dish.css"

class Dish extends Component {
    constructor(props) {
        super(props);
        const { id, dishName, cuisine, description, imageUrl, price } = props.children
        this.state = {
            id, dishName, cuisine, description, imageUrl, price
        }
    }
    render() {
        const { id, dishName, cuisine, description, imageUrl, price } = this.state
        return (
            <div className="dishCard">
                <h3>{dishName}</h3>
                <div className="imageDiv">
                    <center>
                        <img src={imageUrl} alt={dishName} />
                    </center>
                </div>
                <p>{description}</p>
                <table>
                    <tr>
                        <td>
                            <p>Price: {price}</p>
                        </td>
                        <td>
                            <button>Add to Cart</button>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Dish;
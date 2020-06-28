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
                    <img src={imageUrl} alt={dishName} />
                </div>
                <p>{description}</p>
                <p>Price: {price}</p>
                <button>Add to Cart</button>
            </div>
        )
    }
}

export default Dish;
// COMPONENT TO ADD DISH TO MONGODB
import React, { Component } from "react";
import "./adddish.css";
import axios from "axios";

class AddDish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishName: "",
            cuisine: "",
            description: "",
            imageUrl: "",
            price: null,
            password: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dishName, cuisine, description, imageUrl, price, password } = e.target;
        this.setState({
            dishName: dishName.value,
            cuisine: cuisine.value,
            description: description.value,
            imageUrl: imageUrl.value,
            price: price.value,
            password: password.value
        }, async () => {
            console.log(this.state);

            await axios.post('/dish/new', this.state)
                .then((response) => {
                    alert(response.data);
                })
                .catch((err) => {
                    alert(err);
                })
        });
    }

    render() {
        return (
            <div className="AddDishFULL">
                <form className="AddDishForm" onSubmit={this.handleSubmit}>
                    <center>
                        <table>
                            <tr>
                                <td>DISH NAME: </td>
                                <td>
                                    <input type="text" name="dishName" id="dishName" />
                                </td>
                            </tr>
                            <tr>
                                <td>CUISINE: </td>
                                <td>
                                    <select name="cuisine" id="cuisine">
                                        <option value="Fast Food">Fast Food</option>
                                        <option value="North Indian">North Indian</option>
                                        <option value="South Indian">South Indian</option>
                                        <option value="Italian">Italian</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>DESCRIPTION: </td>
                                <td>
                                    <textarea type="text" name="description" id="description" rows="4" />
                                </td>
                            </tr>
                            <tr>
                                <td>IMAGE URL: </td>
                                <td>
                                    <input type="text" name="imageUrl" id="imageUrl" />
                                </td>
                            </tr>
                            <tr>
                                <td>PRICE: </td>
                                <td>
                                    <input type="number" name="price" id="price" />
                                </td>
                            </tr>
                            <tr>
                                <td>PASSWORD: </td>
                                <td>
                                    <input type="password" name="password" id="password" />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" style={{ "text-align": "center" }}>
                                    <input type="submit" value="ADD DISH" />
                                </td>
                            </tr>
                        </table>
                    </center>
                </form>
            </div>
        );
    }
}

export default AddDish;

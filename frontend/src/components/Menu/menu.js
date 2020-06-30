// COMPONENT THAT DISPLAYS DISHES BASED ON THE CUISINE SELECTED

import React, { Component } from "react";
import Dish from "../Dish/dish"
import "./menu.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import axios from 'axios'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisine: this.props.match.params.cuisine,
            loading: true,
            dishes: [],
        }
        this.getCuisineFood = this.getCuisineFood.bind(this);
        this.getCuisineFood();
    }

    // SENDING A GET REQUEST FOR GETTING DISHES OF A PARTICULAR CUISINE
    getCuisineFood = async () => {
        await axios.get(`/dish/${this.state.cuisine}`)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    dishes: response.data,
                    loading: false
                });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // WHEN CUISINE IS CHANGED
    componentWillReceiveProps(newProps) {
        this.setState({ cuisine: newProps.match.params.cuisine, loading: true, dishes: [] }, (newState) => {
            this.getCuisineFood();
        })
    }

    render() {
        return (
            <div className="MenuFULL">
                <h1>
                    {this.state.cuisine}
                </h1>
                <div className="MenuInDiv">
                    {this.state.loading ? <Loader type="Oval" color="rgb(79, 101, 121)" height={100} width={100} /> :
                        this.state.dishes.map((dish) => {
                            return (<Dish>{dish}</Dish>)
                        })
                        // console.log('HERE')
                    }
                </div>

            </div>
        )
    }
}

export default Menu;
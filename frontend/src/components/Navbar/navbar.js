import React, { Component } from "react";
import { Link } from "react-router-dom";
import './navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="nav" variant="tabs">
                <Link to="/" className="linkElement"><h1>ORDER FOOD</h1></Link>
                <div className="navDiv">
                    <ul className="ulElement">
                        <Link to="/menu/Fast Food" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                    Fast Food
                                </div>
                            </li>
                        </Link>
                        <Link to="/menu/North Indian" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                    North Indian
                                </div>
                            </li>
                        </Link>
                        <Link to="/menu/South Indian" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                    South Indian
                                </div>
                            </li>
                        </Link>
                        <Link to="/menu/Italian" className="linkElement">
                            <li className="liElement">
                                <div className="divElement">
                                    Italian
                                </div>
                            </li>
                        </Link>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
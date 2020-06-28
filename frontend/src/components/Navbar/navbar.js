import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav>
                <Link to="/">ORDER FOOD</Link>
                <div>
                    <ul>
                        <li>
                            <Link to="/menu/Fast Food">
                                Fast Food
                            </Link>
                        </li>
                        <li>
                            <Link to="/menu/North Indian">
                                North Indian
                            </Link>
                        </li>
                        <li>
                            <Link to="/menu/South Indian">
                                South Indian
                            </Link>
                        </li>
                        <li>
                            <Link to="/menu/Italian">
                                Italian
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;
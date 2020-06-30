// THE NAVIGATION BAR COMPONENT

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import './navbar.css'
import NotificationBadge from 'react-notification-badge';
import { Effect } from 'react-notification-badge';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav className="nav" variant="tabs">
                <table className="navTable">
                    <tr>
                        <td className="navTitle">
                            <h1>
                                <Link to="/" className="linkElement"> <p style={{"display":"inline","color":"black"}}>ANIM</p><p style={{"display":"inline","color":"#fab64f","-webkit-text-stroke":"1px black"}}>E</p><p style={{"display":"inline","color":"black"}}>AT</p></Link>
                            </h1>
                        </td>
                        <td className="navLogin">
                            <Link to="/profile">
                                <i className="material-icons" style={{ "font-size": "40px", "color": "black" }}>person</i>
                            </Link>
                        </td>
                        <td className="navCart">
                            <Link to="/cart">
                                <NotificationBadge count={this.props.dishCount} effect={Effect.SCALE} frameLength={5.0} />
                                <i className='fas fa-shopping-cart' style={{ "font-size": "30px", "color": "black" }}></i>
                            </Link>
                        </td>
                    </tr>
                </table>
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

function mapStateToProps(state) {
    return ({
        dishCount: state.cart.dishCount,
    })
}

export default connect(mapStateToProps)(Navbar);
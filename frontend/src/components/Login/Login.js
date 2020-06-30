import React, { Component } from "react";
import { login } from "../../actions/authActions"
import "./Login.css"
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   email: "",
    //   password: "",
    //   isLoading: "",
    // };
  }

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = {
      email: `${email.value}`,
      password: `${password.value}`,
    };
    this.props.login(user);
  }

  render() {
    return (
      <div className="LoginFULL">
        <form onSubmit={this.handleLogin}>
          <center><h2>LOGIN</h2></center>
          <table>
            <tr>
              <td>EMAIL:</td>
              <td>
                <input type="text" name="email" id="email" />
              </td>
            </tr>
            <tr>
              <td>PASSWORD:</td>
              <td>
                <input type="password" name="password" id="password" />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{"text-align":"center"}}>
                <input type="submit" value="LOGIN" className="loginBttn"/>
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { login })(Login);

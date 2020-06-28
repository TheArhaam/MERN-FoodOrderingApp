import React, { Component } from "react";
import { connect } from "react-redux"

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phoneNum: "",
      address: "",
      password: "",
      msg: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('SUBMIT');
  }

  render() {
    return (
      <div className="LoginFULL">
        <form onSubmit={this.handleSubmit}>
          <table>
            <tr>
              <td>NAME:</td>
              <td>
                <input type="text" name="name" id="name" />
              </td>
            </tr>
            <tr>
              <td>EMAIL:</td>
              <td>
                <input type="text" name="email" id="email" />
              </td>
            </tr>
            <tr>
              <td>PHONE NUMBER:</td>
              <td>
                <input type="number" name="phone" id="phone" />
              </td>
            </tr>
            <tr>
              <td>ADDRESS:</td>
              <td>
                <textarea name="address" id="address" rows="2" />
              </td>
            </tr>
            <tr>
              <td>PASSWORD:</td>
              <td>
                <input type="password" name="password" id="password" />
              </td>
            </tr>
            <tr>
              <td>CONFIRM PASSWORD:</td>
              <td>
                <input type="password" name="cpassword" id="cpassword" />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <input type="submit" value="REGISTER" />
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

export default Register;

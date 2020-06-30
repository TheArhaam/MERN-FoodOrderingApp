import React, { Component } from "react";
import { connect } from "react-redux";
import "./register.css"
import { register } from "../../actions/authActions"

class Register extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   name: "",
    //   email: "",
    //   phoneNum: "",
    //   address: "",
    //   password: "",
    //   msg: null,
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('SUBMIT');
    const { email, password, name, phoneNumber, address } = e.target.elements;
    // console.log(e.target.elements)
    // console.log(email.value);
    const newUser = {
      email: `${email.value}`,
      password: `${password.value}`,
      name: `${name.value}`,
      phoneNumber: `${phoneNumber.value}`,
      address: `${address.value}`,
    };
    this.props.register(newUser);
  }

  render() {
    return (
      <div className="RegisterFULL">
        <form onSubmit={this.handleSubmit}>
          <center><h2>REGISTER</h2></center>
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
                <input type="number" name="phoneNumber" id="phoneNumber" />
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
              <td colSpan="2" style={{"text-align":"center"}}>
                <input type="submit" value="REGISTER" className="registerBttn"/>
              </td>
            </tr>
          </table>
          {/* {Object.keys(this.props.error.msg).length === 0 && this.props.error.msg.constructor === Object ? null : this.props.error.msg}
          {console.log(this.props.error.msg)} */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps, { register })(Register);

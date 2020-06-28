import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: "",
    };
  }

  render() {
    return (
      <div className="LoginFULL">
        <form>
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
              <td colSpan="2">
                <input type="submit" value="LOGIN" />
              </td>
            </tr>
          </table>
        </form>
      </div>
    );
  }
}

export default Login;

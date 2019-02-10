import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        };
    }

    render() {

        return (
            <div className = "root-container">

            <div className="box-container">
            {this.state.isLoginOpen && <LoginBox/>
            }
        {this.state.isRegisterOpen && <RegisterBox/>}
    </div>
            </div>
        );
    }
}

//reactDOM.render(
    //<LoginPage />, document.getElementById("root"));

class LoginBox extends Component {

    constructor(props) {
        super(props);
        this.state ={};
    }

    submitLogin(e) {}

    render() {
        return (
            <div className = "inner-container">
                <div className = "header">
                    Login
                </div>
                <div className = "box">

                    <div className = "input-group">
                        <label htmlFor = "username">Username
                        </label>
                        <input
                            type = "text"
                            name = "username"
                            className = "login-input"
                            placeholder = "Username"/>
                    </div>

                    <div className = "input-group">
                        <label htmlFor = "password"> Password
                        </label>
                        <input
                            type = "password"
                            name = "password"
                            className = "login-input"
                            placeholder = "Password"/>
                    </div>

                    <button
                        type = "button"
                        className = "login-btn"
                        onClick = {this.submitLogin.bind(this)}><Link to="/main" >Login</Link></button>
                </div>
            </div>
        );
    }
}

class RegisterBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) {}

    render() {
        return (
            <div className="inner-container">
                <div className="header">
                    Register
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="login-input" placeholder="Email"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"/>
                    </div>
                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitRegister
                            .bind(this)}>Register</button>
                </div>
            </div>
        );
    }
}
//
// class LoginPage extends Component{
//     render() {
//     return (
//         <div className="box-container">
//             {this.state.isLoginOpen && <LoginBox/>
//             }
//             {this.state.isRegisterOpen && <RegisterBox/>}
//         </div>
//     );
//   }
// }

export default LoginPage;

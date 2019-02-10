import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state ={};
    }

    submitLogin(e) {}

    render() {
        return (
            <div className = "root-container">
                <center>
                    <div className = "box-container">
            <div className = "inner-container">
                <div className = "login_header">
                    Welcome to Fitness Friend!
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

                    <button
                        type = "button"
                        className = "login-btn"
                        >
                         <Link to="/registerpage" > Create New User </Link>
                    </button>
                </div>
            </div>
            </div>
            </center>
            </div>
        );
    }
}


export default LoginPage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state ={
            username:'',
            password:'',
        };
    }

    updatePass = (evt) => {
        this.setState({password: evt.target.value});
    }

    updateUser = (evt) => {
        this.setState({username: evt.target.value});
    }

    handleRedirect = (output) => {
        console.log(output.redirect);
        //window.location.href = data;
    }

    handleLogin = (event) =>{
        event.preventDefault();
        const data = JSON.stringify(this.state);

        fetch('http://localhost:8000', {
            method: "POST",
            headers: {'Content-type': 'application/json'},
            body: data
        }).then(function(response){
            return response.json();
        })
            .then(function(output){
                console.log(output);
                window.location.href = output.redirect;
            });
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
                            placeholder = "Username"
                            onChange={evt => this.updateUser(evt)}/>
                    </div>

                    <div className = "input-group">
                        <label htmlFor = "password"> Password
                        </label>
                        <input
                            type = "password"
                            name = "password"
                            className = "login-input"
                            placeholder = "Password"
                            onChange={evt => this.updatePass(evt)}/>
                    </div>

                    <button
                        type = "button"
                        className = "login-btn"
                        onClick = {this.handleLogin}>Login</button>

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

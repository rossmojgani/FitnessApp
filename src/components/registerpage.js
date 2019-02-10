import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class RegisterPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            size: event.target.value
        });
    }

    submitRegister(e) {}

    render() {
        return (
            <div className = "root-container">
                <center>
                    <div className = "box-container">
            <div className="inner-container">
                <div className="header">
                    Create New User
                </div>
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="username">Full Name</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Name"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="username">Age</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Age"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="username">Gender</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Gender"/>
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

                    <div className="input-group">
                        <label htmlFor="username">Weight (Pounds)</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Weight"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="username">Height (Imperial)</label>
                        <input
                            type="text"
                            name="username"
                            className="login-input"
                            placeholder="Feet-Inches"/>
                    </div>

                        <form onSubmit={this.handleSubmit}>
                            Goal:

                            <ul class = "nobull">
                                <li>
                                    <label>
                                        <input
                                            type="radio"
                                            value="gain muscle"
                                            checked={this.state.size === "gain muscle"}
                                            onChange={this.handleChange}
                                        />
                                        Gain Muscle
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input
                                            type="radio"
                                            value="lose fat"
                                            checked={this.state.size === "lose fat"}
                                            onChange={this.handleChange}
                                        />
                                        Lose Fat
                                    </label>
                                </li>
                            </ul>
                        </form>

                    <button
                        type="button"
                        className="login-btn"
                        onClick={this
                            .submitRegister
                            .bind(this)}>
                        Register </button>
                    <button type = "button" className = "login-btn">
                        <Link to="/" > Back to Login Page </Link>
                    </button>
                </div>
            </div>
            </div>
    </center>
    </div>
        );
    }
}

export default RegisterPage;
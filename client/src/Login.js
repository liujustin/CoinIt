import React, { Component } from 'react';
import './Login.css';
import WelcomeHeader from './common/welcomeHeader'
import { Icon } from 'semantic-ui-react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="App">
                <div className="Header">
                    <WelcomeHeader />
                </div>
                <div className="Login">
                    <div className="ui centered grid">
                        <div className="column">
                            <form className="ui login form">
                                <div className="ui stacked segment">
                                    <div className="field">
                                        <div className="ui left icon input">
                                            <Icon name='mail' />
                                            <input type="text"
                                                   name="email"
                                                   placeholder="E-mail address"
                                                   autoComplete="off"
                                                   value={ this.state.email }
                                                   onChange={(e) => this.handleUserInput(e)}/>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="ui left icon input">
                                            <Icon name="lock" />
                                            <input type="password"
                                                   name="password"
                                                   placeholder="Password"
                                                   autoComplete="off"
                                                   value={this.state.password}
                                                   onChange={(e) => this.handleUserInput(e)}/>
                                        </div>
                                    </div>
                                    <div className="ui fluid large orange submit button">Login</div>
                                </div>
                            </form>
                            <div className="ui bottom attached warning message">
                                Don't have an account? <a href="/sign-up">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

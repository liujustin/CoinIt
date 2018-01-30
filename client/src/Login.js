import React, { Component } from 'react';
import './Login.css';
import WelcomeHeader from './common/welcomeHeader'
import { Icon } from 'semantic-ui-react'

class Login extends Component {
    render() {
        return (
            <div className="App">
                <div className="Header">
                    <WelcomeHeader />
                </div>
                <div className="Login">
                    <div class="ui centered grid">
                        <div class="column">
                            <form class="ui login form">
                                <div class="ui stacked segment">
                                    <div class="field">
                                        <div class="ui left icon input">
                                            <Icon name='mail' />
                                            <input type="text" name="email" placeholder="E-mail address" />
                                        </div>
                                    </div>
                                    <div class="field">
                                        <div class="ui left icon input">
                                            <i class="lock icon"></i>
                                            <input type="password" name="password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="ui fluid large orange submit button">Login</div>
                                </div>
                            </form>
                            <div class="ui bottom attached warning message">
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

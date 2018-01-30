import React, { Component } from 'react';
import './App.css';
import LoginButton from './common/loginButton'
import WelcomeHeader from './common/welcomeHeader'

class App extends Component {
    render() {
        return (
        <div className="App">
            <div className="Header">
                <WelcomeHeader />
            </div>
            <div className="Login Button">
                <LoginButton />
            </div>
        </div>
        );
    }
}

export default App;

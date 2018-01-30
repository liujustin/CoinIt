import React, { Component } from 'react';
import './App.css';
import LoginButton from './common/loginButton';
import WelcomeHeader from './common/welcomeHeader';
import MyChart from './highcharts/TestChart';

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
            <br />
            <div className="chart">
                <MyChart />
            </div>
        </div>
        );
    }
}

export default App;

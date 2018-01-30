import React, { Component } from 'react';
import '../css/App.css';
import WelcomeHeader from '../common/welcomeHeader'
import MyChart from './highcharts/TestChart';

class App extends Component {
    render() {
        return (
        <div className="App">
            <div class="app-menu">
                <div className="outer-header">
                    <WelcomeHeader />
                </div>
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

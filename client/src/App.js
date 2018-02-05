import React, { Component } from 'react';
import WelcomeHeader from './components/WelcomeHeader'
import MyChart from './components/Highcharts/TestChart';
import Ticker from './components/Highcharts/Ticker';

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
            <div className="ticker">
                <Ticker />
            </div>
        </div>
        );
    }
}

export default App;

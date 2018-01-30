import React, { Component } from 'react';
import '../css/App.css';
import WelcomeHeader from '../common/welcomeHeader'

class App extends Component {
    render() {
        return (
        <div className="App">
            <div class="app-menu">
                <div className="outer-header">
                    <WelcomeHeader />
                </div>
            </div>
        </div>
        );
    }
}

export default App;

import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';


export default class App extends Component {

    render() {
        return (
        <div className="App">
            <Navbar />
            <Main />
        </div>
        );
    }
}

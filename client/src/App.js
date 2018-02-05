import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Main from './components/Main';


class App extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
        <div className="App">
            <Navbar />
            <Main />
        </div>
        );
    }
}

export default App;

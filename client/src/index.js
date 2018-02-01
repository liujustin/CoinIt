import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/index.css';
import './css/login.css';
import './css/App.css';
import './css/header.css';

import App from './App';
import Login from './components/User/Login';
import Register from './components/User/Register'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();

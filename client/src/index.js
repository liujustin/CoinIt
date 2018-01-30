import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/index.css';
import App from './components/App';
import Login from './components/Login'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route path='/login' component={Login} />
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();

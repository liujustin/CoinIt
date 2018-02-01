import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './css/index.css';
import './css/custom.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((

    <BrowserRouter>
      <App />
    </BrowserRouter>

  ), document.getElementById('root'));

registerServiceWorker();

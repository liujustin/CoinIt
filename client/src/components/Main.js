import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './User/Login';
import Register from './User/Register';
import TestChart from './Highcharts/Ticker';

export default class Main extends Component {

    render() {
      return(
        <main>
          <Switch>
            <Route exact path='/' component={ Ticker } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/register' component={ Register }/>
          </Switch>
        </main>
      )
    }
}

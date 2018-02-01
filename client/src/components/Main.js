import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './User/Login';
import Register from './User/Register';
import TestChart from './Highcharts/TestChart';

export default class Main extends Component {

    render() {
      return(
        <main>
          <Switch>
            <Route exact path='/' component={ TestChart } />
            <Route exact path='/login' component={ Login } />
            <Route exact path='/register' component={ Register }/>
          </Switch>
        </main>
      )
    }
}

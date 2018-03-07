import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Ticker from './Charts/Ticker';
import Register from './User/Register';

export default class Main extends Component {

    render() {
      return(
        <main>
          <Switch>
            <Route exact path='/' component={ Ticker } />
            <Route exact path='/register' component={ Register} />
          </Switch>
        </main>
      )
    }
}

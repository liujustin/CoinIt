import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Ticker from './Charts/Ticker';

export default class Main extends Component {

    render() {
      return(
        <main>
          <Switch>
            <Route exact path='/' component={ Ticker } />
          </Switch>
        </main>
      )
    }
}

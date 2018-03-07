import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Button, Menu } from 'semantic-ui-react';
import Time from 'react-time';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      now: new Date(),
      search_name: ""
    };
    this.interval = null;
  };


  componentDidMount() {
    const self = this;
    self.interval = setInterval(() => {
      self.setState({
        now: new Date(),
      });
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  };

  render () {
    return (
      <div className="app-menu">
        <div className="outer-header">
          <div class="ui fixed menu">
            <div class="ui container">
                <a href="/" class="left header item">
                    <img class="crypto-image" src="../assets/images/Bitcoin.png" alt="crypto logo"/>
                    <span class="logo-text">CoinIt!</span>
                </a>
              {/* <div class="right menu">
                    <a href="/login" class="item"><span class="menu-text">Login</span></a>
                </div>
                */}
                <div className="right menu">
                  <span className="ticker_time">
                  <Time value={this.state.now} format="MM/DD/YYYY" />
                  <br />
                  <Time value={this.state.now} format="HH:mm A" />
                  </span>
                </div>
                </div>
            </div>
          </div>
        </div>
      )
    }
}

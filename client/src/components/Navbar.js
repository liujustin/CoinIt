import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Button, Menu } from 'semantic-ui-react';

class Navbar extends Component {

  render () {
    return (
      <div className="app-menu">
        <div className="outer-header">
          <div class="ui fixed menu">
            <div class="ui container">
                <a href="/" class="left header item">
                    <img class="crypto-image" src="../assets/images/bitcoin.png" alt="crypto logo"/>
                    <span class="logo-text">CoinIt!</span>
                </a>
                <div class="right menu">
                    <a href="/login" class="item"><span class="menu-text">Login</span></a>
                </div>
                </div>
            </div>
          </div>
        </div>
      )
    }
}


export default Navbar

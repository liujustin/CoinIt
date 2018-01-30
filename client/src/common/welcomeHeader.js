import React from 'react'
import '../css/App.css';

const WelcomeHeader = () => (
    <div class="ui fixed inverted menu">
        <div class="ui container">
            <a href="/" class="left header item">
                <img class="logo" src="../assets/images/bitcoin.png" alt="crypto logo"/>
                    CoinIt!
            </a>
            <div class="right menu">
                <a href="/login" class="item">Login</a>
            </div>
            </div>
        </div>
)

export default WelcomeHeader

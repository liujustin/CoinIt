import React from 'react'
import '../css/header.css';

const WelcomeHeader = () => (
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
)

export default WelcomeHeader

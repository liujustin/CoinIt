import React from 'react'
import '../css/header.css';

const WelcomeHeader = () => (
    <div className="ui fixed menu">
        <div className="ui container">
            <a href="/" className="left header item">
                <img className="crypto-image" src="../assets/images/bitcoin.png" alt="crypto logo"/>
                <span className="logo-text">CoinIt!</span>
            </a>
            <div className="right menu">
                <a href="/login" className="item"><span className="menu-text">Login</span></a>
            </div>
            </div>
        </div>
)

export default WelcomeHeader

import React, { Component } from 'react';
import '../../css/charts.css'
import axios from 'axios';

const api_url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";

class Ticker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cryptoArray: [],
        }
    }

    componentDidMount(){
        axios.get(api_url).then(response => {
            // loop through each for its name
            for (var i = 0; i < response.data.length; i++) {
                console.log('Name:' + response.data[i].name);
                console.log('Symbol: ' + response.data[i].symbol);
                console.log('Price in USD: ' + response.data[i].price_usd);
                console.log('Rank: ' + response.data[i].rank);
                console.log('===============');
                this.setState({
                    cryptoArray: response.data
                });
            }
        })
    };


    render() {
        const crypto = this.state.cryptoArray.map((el, index) => {
            var imageUrl = `/assets/images/${el.name}.png`;
            return (
                <tr key={index}>
                    <td>
                        {el.rank}
                    </td>
                    <td>
                        <h4 className="ui image header">
                            <img src={imageUrl} className="ui mini rounded image" alt={el.name}/>
                            <div className="content">
                                {el.symbol}
                                <div className="sub header">
                                    {el.name}
                                </div>
                            </div>
                        </h4>
                    </td>
                    <td>
                        ${parseFloat(el.price_usd).toFixed(2)}
                    </td>
                </tr>
            )
        });
        return (
            <table className="ui very basic collapsing celled table">
            <thead>
                <tr><th>Rank</th>
                <th>Crypto</th>
                <th>Price in USD</th>
            </tr></thead>
            <tbody>
                {crypto}
            </tbody>
            </table>
        )
    }
}

export default Ticker;

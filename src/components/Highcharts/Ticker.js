import React, { Component } from 'react';
import axios from 'axios';
import { Header, Image, Table } from 'semantic-ui-react'

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
        });
    };


    render() {
        const crypto = this.state.cryptoArray.map((data, index) => {
            var imageUrl = `/assets/images/${data.name}.png`;
            return (
                <Table.Row id="ticker_data" key={index}>
                    <Table.Cell>
                      {data.rank}
                    </Table.Cell>
                    <Table.Cell>
                        <Header as='h4' image>
                            <Image src={imageUrl} rounded size='mini' />
                            <Header.Content>
                                {data.symbol}
                                <Header.Subheader>
                                    {data.name}
                                </Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell>
                        <span className="ticker_price">Price USD: </span>${parseFloat(data.price_usd).toFixed(2)}
                    </Table.Cell>
                    <Table.Cell className={data.percent_change_1h < 0 ? "red-percent": "green-percent"}>
                        {data.percent_change_1h}%
                    </Table.Cell>
                    <Table.Cell className={data.percent_change_24h < 0 ? "red-percent" : "green-percent"}>
                        {data.percent_change_24h}%
                    </Table.Cell>
                </Table.Row>
            )
        });
        return (
            <Table id="ticker" basic='very' celled collapsing>

                <Table.Header id="ticker_header">
                    <Table.Row>
                        <Table.HeaderCell>Rank</Table.HeaderCell>
                        <Table.HeaderCell>Currency</Table.HeaderCell>
                        <Table.HeaderCell>Price in USD</Table.HeaderCell>
                        <Table.HeaderCell>Percent Change(1H)</Table.HeaderCell>
                        <Table.HeaderCell>Percent Change(24HR)</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {crypto}
                </Table.Body>
            </Table>
        )
    }
}

export default Ticker;

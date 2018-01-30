import React from 'react'
import { Header, Image, Icon } from 'semantic-ui-react'

const WelcomeHeader = () => (
    <div>
        <Header as='h2' icon>
            <Image centered size='huge' src='../assets/bitcoin.png' />
            <Header.Content>
                Crypto Tracker
            </Header.Content>
            <Header.Subheader>
                Top website for tracking everything crypto
            </Header.Subheader>
        </Header>
    </div>
)

export default WelcomeHeader
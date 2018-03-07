import React, { Component } from 'react';
import axios from 'axios';
import { Container, Button, Form } from 'semantic-ui-react';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios.post('/api/register', {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password
        })
        .then((response) => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return(
            <div className="register-form">
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Email: </label>
                        <input name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.handleUserInput(e)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>First Name: </label>
                        <input name="firstName" placeholder="First Name" value={this.state.firstName} onChange={(e) => this.handleUserInput(e)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name: </label>
                        <input name="lastName" placeholder="Last Name"  value={this.state.lastName} onChange={(e) => this.handleUserInput(e)}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Password: </label>
                        <input name="password" placeholder="Password"  value={this.state.password} onChange={(e) => this.handleUserInput(e)}/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
            </div>
        )
    }
}

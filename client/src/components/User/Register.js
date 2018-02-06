import React, { Component } from 'react';
import Navbar from '../Navbar';
import { Icon } from 'semantic-ui-react';
import userService from './UserService';

class Register extends Component {
    constructor(props) {
        super(props);
        this.userService = new userService();
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            full_name: '',
            email: '',
            password: ''
        }
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.userService.sendData(this.state.full_name, this.state.email, this.state.password);
        this.props.history.push('/register');
    }

    render() {
        return (
          <div className="login-container">
              <div className="column">
                  <form className="ui login form" onSubmit={this.handleSubmit}>
                      <div className="ui stacked segment">
                          <div className="field">
                              <div className="ui left icon input">
                                  <Icon name='user' />
                                  <input type="text"
                                      name="full_name"
                                      placeholder="Full Name"
                                      autoComplete="off"
                                      value={this.state.full_name}
                                      onChange={(e) => this.handleUserInput(e)} />
                              </div>
                          </div>
                          <div className="field">
                              <div className="ui left icon input">
                                  <Icon name='mail' />
                                  <input type="text"
                                      name="email"
                                      placeholder="E-mail address"
                                      autoComplete="off"
                                      value={this.state.email}
                                      onChange={(e) => this.handleUserInput(e)} />
                              </div>
                          </div>
                          <div className="field">
                              <div className="ui left icon input">
                                  <Icon name="lock" />
                                  <input type="password"
                                      name="password"
                                      placeholder="Password"
                                      autoComplete="off"
                                      value={this.state.password}
                                      onChange={(e) => this.handleUserInput(e)} />
                              </div>
                          </div>
                          {/* <div className="ui fluid large orange submit button">Login</div> */}
                          <input className="ui fluid large orange submit button" type="submit" value="REGISTER" />
                      </div>
                  </form>
              </div>
          </div>
        );
    }
}

export default Register;

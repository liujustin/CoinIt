import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import axios from 'axios'

class Register extends Component {
    constructor(props) {
      super(props);
      this.state = {
        params: {
          email: '',
          password: '',
          passwordRepeat: ''
        },
        authenticated: false
      };
    }

    componentDidMount() {
      // Check for if user is logged in
      axios.get('/user/verify')
        .then(function(response) {
          this.setState({
            authenticated:
            response.data.authenicated
          });
        })
        .catch(function(err) {
          console.log(err);
        });
    }

    handleInputChange = (event) => {
      this.setState({
        params: {
          ...this.state.params,
          // '...' is jsx for "spread" operator
          [event.target.name]: event.target.value
        }
      });
    }

    handleSubmit = (event) => {
      const params = this.state.params;

      axios.post('http://localhost:5000/user/register', params)
        .then(function(response) {
          console.log(response);
          this.setState({
            authenicated: response.data.authenicated
          })
        })
        .catch(function(err) {
          console.log(err);
        });
      event.preventDefault();
    }

    render() {
      const { authenicated } = this.state;
      if (authenicated) {
        return <Redirect to = '/' />
      }

      return (
        <div className="login-container">
            <div className="column">
                <form className="ui login form" onSubmit={this.handleSubmit}>
                  <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <Icon name='mail' />
                                <input type="text"
                                    name="email"
                                    placeholder="E-mail address"
                                    autoComplete="off"
                                    value={this.state.email}
                                    onChange={ this.handleInputChange } />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <Icon name="lock" />
                                <input type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={ this.handleInputChange } />
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <Icon name="lock" />
                                <input type="password"
                                    name="passwordRepeat"
                                    placeholder="Repeat Password"
                                    value={this.state.password}
                                    onChange={ this.handleInputChange } />
                            </div>
                        </div>
                        <input className="ui fluid large orange submit button" type="submit" value="REGISTER" />
                    </div>
                </form>
            </div>
        </div>
      );
  }
}

export default Register;

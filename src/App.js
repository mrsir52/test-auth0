import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth0Lock from 'auth0-lock';
import Login from './Login'

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            idToken: '',
            profile: {}
        };
    }

    static defaultProps = {
        clientID: 'smIMyNnQtfTumfslm247Qt0FMjDj4BLg',
        domain: 'training-test.auth0.com'
    }

    componentWillMount(){
        this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

        this.lock.on('authenticated', (authResult) => {
            console.log(authResult);

        });
    }

    showLock(){
        this.lock.show();
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
            <br/>
            <Login
            onLogin={this.showLock.bind(this)}
            />
        </p>
      </div>
    );
  }
}

export default App;

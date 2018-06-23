import React, { Component } from 'react';
import './App.css';

import UnfollowersList from './UnfollowersList'
import LoginForm from "./LoginForm"

class App extends Component 
{  
  constructor() 
  {
    super()

    this.state = {
      loggedIn: false,
      unfollowers: []
    }
  }

  loginSuccessful(unfollowersResp)
  {
    this.setState({ unfollowers: unfollowersResp, loggedIn: true })
  }
  
  render() {
    if(this.state.loggedIn)
    {
      return (
        <div>
          <UnfollowersList unfollowersList={this.state.unfollowers} />
        </div>
      );
    }
    else
    {
      return (
        <div>
          <LoginForm logSuccessful={this.loginSuccessful.bind(this)} />
        </div>
      );
    }
  }
}

export default App;

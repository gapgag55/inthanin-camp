import React, { Component } from 'react'
import axios from 'axios'

import Header from '../components/Header'

class Admin extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="login">
          <form action="/admin" method="POST">
              <h1>Login as Admin</h1>
              <input type="text" name="username" placeholder="username" />
              <input type="password" name="password" placeholder="password" />
              <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin;
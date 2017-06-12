import React, { Component } from 'react';
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Hero from '../components/index/Hero'
import Form from '../components/index/Form'

import stylesheet from '../scss/index.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
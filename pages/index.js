import React, { Component } from 'react';
import Head from 'next/head'

import Hero from '../components/Hero'
import Form from '../components/Form'
import Footer from '../components/Footer'

import stylesheet from '../scss/index.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Inthanin Guild Camp #1</title>
          <link rel="shortcut icon" type="image/png" href="static/images/favicon.png"/>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <Hero />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
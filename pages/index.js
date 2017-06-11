import React, { Component } from 'react';
import Head from 'next/head'

import Hero from '../components/Hero'
import Form from '../components/Form'

import stylesheet from '../scss/index.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Inthanin Guild Camp #1</title>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <Hero />
        <Form />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Hero from '../components/index/Hero'
// import FormStaff from '../components/index/FormStaff'
import FormStudent from '../components/index/FormStudent'

import stylesheet from '../scss/index.scss'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isStaff: false
    }
  }

  nextTabs() {
    this.setState({
      isStaff: !this.state.isStaff
    })
  }

  render() {
    var render;
    // if(this.state.isStaff) {
      render = <FormStudent />
    // } else {
    //   render = <FormStudent />
    // }
    
    return (
      <div>
        <Header />
        <Hero changeTab={this.nextTabs.bind(this)}/>
        {render}
        <Footer />
      </div>
    );
  }
}

export default App;
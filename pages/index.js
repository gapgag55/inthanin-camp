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
          <meta property="og:url"                content="http://www.inthanincamp.xyz/" />
          <meta property="og:type"               content="article" />
          <meta property="og:title"              content="เปิดรับสมัคร Staff ค่ายอินทนิลไกด์แคมป์ #1" />
          <meta property="og:description"        content="ตอนนี้กำลังเปิดรับสมัครพี่ๆช่วยงานค่ายอินทนิลไกด์แคมป์ ค่ายสานฝันสำหรับน้องๆโรงเรียนเทศบาลเฉลิมพระเกียรติฯสมเด็จพระเทพรัตนราชสุดาสยามบรมราชกุมารี" />
          <meta property="og:image"              content="http://www.inthanincamp.xyz/static/images/facebook.png" />
        </Head>
        <Hero />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
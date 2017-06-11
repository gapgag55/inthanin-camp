import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor';

class Hero extends Component {
    render() {
        return (
            <section className="header">
                <div className="heading">
                    <h1>Inthanin</h1>
                    <h2>guide camp #1</h2>
                    <Scrollchor to="#section2" animate={{ offset: 0, duration: 800 }} className="button">สมัครเป็น Staff</Scrollchor>
                </div>
            </section>
        )
    }
}

export default Hero;
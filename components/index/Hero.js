import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor';

class Hero extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    show() {
        this.setState({
            show: true
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.show.bind(this))
    }

    render() {
        var show = this.state.show ? 'bar is-show' : 'bar';
        return (
            <div>
            <div className={show}>
                กำหนดการ : 
                <ul>
                    <li>รับสมัคร Staff วันนี้ - 20 มิ.ย. 2560 ประกาศผลวันที่ 21 มิ.ย. 2560</li>
                    <li>รับสมัครน้องค่าย 21 - 30  มิ.ย. 2560 ประกาศผลวันที่ 5 ก.ค. 2560</li>
                </ul>
            </div>
            <section className="header">
                <div className="heading">
                    <h1>Inthanin</h1>
                    <h2>guide camp #1</h2>
                    <p>ค่ายจัดวันที่ 8,9,10 กรกฎาคม 2560 - สถานที่จะแจ้งให้ทราบผ่านแฟนเพจ</p>
                    <Scrollchor to="#section2" animate={{ offset: 0, duration: 800 }} className="button">สมัครเป็น Staff - (เฉพาะรุ่นพี่ที่จบ ม.ปลาย)</Scrollchor>
                </div>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style={{display: 'none'}}>
                    <symbol id="wave">
                        <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"></path>
                        <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"></path>
                        <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"></path>
                        <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"></path>
                    </symbol>
                </svg>
                <svg className="water__wave water__wave_front" viewBox="0 0 560 20">
                    <use xlinkHref="#wave"></use>
                </svg>
                <svg className="water__wave water__wave_back" viewBox="0 0 560 20">
                    <use xlinkHref="#wave"></use>
                </svg>
                <img src="static/images/Cartoon-2.svg" className="cartoon cartoon-1" />
                <img src="static/images/Cartoon.svg" className="cartoon cartoon-2" />
                <img src="static/images/Cartoon.svg" className="cartoon cartoon-3" />
            </section>
            </div>
        )
    }
}

export default Hero;
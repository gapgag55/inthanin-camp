import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'

class FormStaff extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            submit: false,
            message: {
                title: 'ไม่สามารถลงทะเบียนได้'
            }
        }
    }


    sendData(event) {
        event.preventDefault();

        var data = {
            fname:      this.refs.fname.value,
            nname:      this.refs.nname.value,
            gen:        this.refs.gen.value,
            facebook:   this.refs.facebook.value,
            occupation: this.refs.occupation.value,
            interest:   this.refs.interest.value,
            skill:      this.refs.skill.value,
            camp:       this.refs.camp.value,
            activity_favorite:  this.refs.activity_favorite.value,
            why:         this.refs.why.value,
            suggestion:  this.refs.suggestion.value,
        }

        axios.post('/staff', data)
        .then(function (response) {
            if(response.data.added) {
                this.setState({
                    submit: true,
                    message: {
                        title: 'สมัครเรียบร้อย'
                    }
                })
            }
        }.bind(this))
        .catch(function (error) {
            console.log(error);
        });
        
    }

    popup() {
        if(this.state.submit) {
            return (
                <div className="popup" onClick={() => this.closePopup()}>
                    <div className="card" onClick={(e) => e.stopPropagation()}>
                        <div className="close" onClick={() => this.closePopup()}></div>
                        <h4>{this.state.message.title}</h4>
                        <p>กดแชร์ลง Facebook</p>
                        <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fwww.inthanincamp.xyz%2F&layout=button_count&size=large&mobile_iframe=true&width=74&height=28&appId" width="74" height="28" style={{border:'none', overflow: 'hidden', scrolling: 'no', frameborder: 0,  allowTransparency: 'true'}}></iframe>
                    </div>
                </div>
            )
        }
    }

    closePopup() {
        this.setState({submit: false})
    }

    render() {
        return (
            <div>
                <section id="section2">
                    <div className="wrapper">
                    <h3>ใบสมัครเป็นพี่ Staff</h3>
                    <h4>(สิทธิ์เฉพาะรุ่นพี่ที่จบแล้ว) - สำหรับการเป็นพี่ Staff นั้นทุกคนจะถูกคัดเลือกจากพี่ๆกลุ่มมหาวิทยาลัยซึ่งผลประกาศจะแจ้งให้ทราบผ่านทาง <a href="https://www.facebook.com/inthaninguidecamp/" target="_blank">แฟนเพจ</a> โปรดกรอกแบบฟอร์มให้ดีที่สุด</h4>
                    <div className="schedule">
                        กำหนดการ 
                        <ul>
                            <li>รับสมัคร Staff ตั้งแต่วันนี้ - 20 มิ.ย. 2560</li>
                            <li>รับสมัครน้องค่าย วันที่ 21 - 30  มิ.ย. 2560</li>
                            <li>ประกาศผลทั้ง Staff และน้องค่าย วันที่ 6 ก.ค. 2560</li>
                        </ul>
                    </div>
                    </div>

                    <form onSubmit={this.sendData.bind(this)} className="flex flex-wrap">
                        <div className="flex-1-3 padding">
                            <input type="text" placeholder="ชื่อ - นามสกุล" ref="fname" required/>
                        </div>
                        <div className="flex-1-3 padding">
                            <input type="text" placeholder="ชื่อเล่น" ref="nname" required/>
                        </div>
                        <div className="flex-1-3 padding">
                            <input type="text" placeholder="อินทนิลรุ่น" ref="gen" required/>
                        </div>
                        <div className="flex-1 padding">
                            <input type="text" placeholder="ชื่อ Facebook" ref="facebook" required/>
                        </div>
                        <div className="flex-1 padding">
                            <input type="text" placeholder="ระบุคณะสาขา มหาวิทยาลัยของท่าน (หากไม่ได้เป็นนักศึกษา ระบุสถานภาพปัจจุบันมาพอเข้าใจ)" ref="occupation" required/>
                        </div>
                        <div className="flex-1-2 padding">
                            <textarea placeholder="สิ่งที่สนใจ" ref="interest" required></textarea>
                        </div>

                        <div className="flex-1-2 padding">
                            <textarea placeholder="ความสามารถพิเศษ" ref="skill" required></textarea>
                        </div>

                        <div className="flex-1-2 padding">
                            <textarea placeholder="เคยผ่านค่ายไหนมาบ้าง (เว้นว่างได้)" ref="camp"></textarea>
                        </div>

                        <div className="flex-1-2 padding">
                            <textarea placeholder="กิจกรรมที่เคยทำแล้วประทับใจคืออะไร? เพราะอะไร?" ref="activity_favorite" required></textarea>
                        </div>

                        <div className="flex-1 padding">
                            <textarea placeholder="เหตุผลที่มาสมัครเป็น Staff" ref="why" required></textarea>
                        </div>

                        <div className="flex-1 padding">
                            <textarea placeholder="ข้อเสนอแนะนำ" ref="suggestion"></textarea>
                        </div>

                        <div className="flex-1">
                            <button type="submit">ส่งคำตอบ</button>
                        </div>
                    </form>
                </section>

                {this.popup()}
            </div>
        )
    }
}


export default FormStaff

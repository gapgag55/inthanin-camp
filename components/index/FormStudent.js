import React, { Component } from 'react'
import axios from 'axios'
import Link from 'next/link'

class FormStudent extends Component {

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
            fname:     this.refs.fname.value,
            nname:     this.refs.nname.value,
            gen:       this.refs.gen.value,
            facebook:  this.refs.facebook.value,
            interest:  this.refs.interest.value,
            skill:     this.refs.skill.value,
            camp:      this.refs.camp.value,
            activity_favorite:  this.refs.activity_favorite.value,
            why:         this.refs.why.value,
            suggestion:  this.refs.suggestion.value,
        }

        axios.post('/student', data)
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
                    <h3>ใบสมัครเข้าร่วมค่าย</h3>
                    <h4>ทุกคนจะถูกคัดเลือกจากพี่ๆกลุ่มมหาวิทยาลัยซึ่งผลประกาศจะแจ้งให้ทราบผ่านทาง <a href="https://www.facebook.com/inthaninguidecamp/" target="_blank">Fanpage</a> <br/>โปรดกรอกแบบฟอร์มให้ดีที่สุด</h4>
                    
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
                        <div className="flex-1-2 padding">
                            <textarea placeholder="ความสนใจ" ref="interest" required></textarea>
                        </div>

                        <div className="flex-1-2 padding">
                            <textarea placeholder="ความสามารถพิเศษ" ref="skill" required></textarea>
                        </div>

                        <div className="flex-1-2 padding">
                            <textarea placeholder="เคยผ่านค่ายไหนมาบ้าง (เว้นว่างได้)" ref="camp"></textarea>
                        </div>

                        <div className="flex-1-2 padding">
                            <textarea placeholder="กิจกรรมที่ประทับใจ เพราะอะไร" ref="activity_favorite" required></textarea>
                        </div>

                        <div className="flex-1 padding">
                            <textarea placeholder="เหตุผลที่มาสมัครเข้าร่วมค่าย" ref="why" required></textarea>
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


export default FormStudent

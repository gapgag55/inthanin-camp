import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {

    sendData(event) {
        event.preventDefault();

        axios.post('/post', {
            name: this.refs.fname.value,
            lname: this.refs.lname.value,
            nname: this.refs.nname.value,
            why: this.refs.why.value,
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    render() {
        return (
            <section id="section2">
                <h3>ใบสมัครเป็นพี่ Staff</h3>
                <h4>สำหรับการเป็นพี่ Staff นั้นทุกคนจะถูกคัดเลือกจากพี่ๆกลุ่มมหาวิทยาลัยซึ่งผลประกาศจะแจ้งให้ทราบผ่านทาง <a href="https://www.facebook.com/inthaninguidecamp/" target="_blank">Fanpage</a></h4>
                <form onSubmit={this.sendData.bind(this)} className="flex flex-wrap">
                    <div className="flex-1-3 padding">
                        <input type="text" placeholder="ชื่อ" ref="fname" name="fname"/>
                    </div>
                    <div className="flex-1-3 padding">
                        <input type="text" placeholder="นามสกุล" ref="lname"/>
                    </div>
                    <div className="flex-1-3 padding">
                        <input type="text" placeholder="ชื่อเล่น" ref="nname"/>
                    </div>

                    <div className="flex-1 padding">
                        <textarea placeholder="ทำไมถึงสมัครเป็นพี่ Staff?" ref="why"></textarea>
                    </div>

                    <div className="flex-1">
                        <button type="submit">ส่งคำตอบ</button>
                    </div>
                </form>
            </section>
        )
    }
}


export default Form

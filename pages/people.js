import React, { Component } from 'react';
import axios from 'axios'

import Header from '../components/Header'

class People extends Component {

    constructor(props) {
        super(props)

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get('/staff').then((response) => {
            this.setState({
                people: response.data.staff
            })
        })
    }

    change(e, id) {
        this.setState({
            people: this.state.people.map(person => {
                if (person._id == id) {
                    person.pass = !person.pass

                    axios.post('/pass', {id, value: person.pass})
                }

                return person
            })
        })
    }

    render() { 
        return (
            <div>
                <Header />
                <div className="people">
                    <div className="wrapper">
                        <div className="flex">
                            <span className="flex-1">จำนวน { this.state.people.length } คน</span>
                            <span className="flex-1 text-right">คนผ่าน { this.state.people.filter(person => person.pass).length } คน</span>
                        </div>
                        <div className="head flex">
                            <div className="flex-1">ชื่อ-นามสกุล</div>
                            <div className="flex-1">ชื่อเล่น</div>
                            <div className="flex-1">รุ่น</div>
                            <div className="flex-1">Facebook</div>
                            <div className="flex-1">ความสนใจ</div>
                            <div className="flex-1">เหตุผลที่อยากเข้าร่วม</div>
                            <div className="flex-1">กิจกรรมที่ชอบ</div>
                            <div className="flex-1">ค่ายที่เคยผ่าน</div>
                            <div className="flex-1">สกิล</div>
                            <div className="flex-1">ข้อแนะนำ</div>
                            <div className="flex-1">ผ่าน/ไม่ผ่าน</div>
                        </div>
                        <div className="body">
                            {this.state.people.map((person) => (
                        
                            <div className="row flex" key={person._id}>
                                <div className="flex-1">{person.fullname}</div>
                                <div className="flex-1">{person.nickName}</div>
                                <div className="flex-1">{person.generation}</div>
                                <div className="flex-1">{person.facebook}</div>
                                <div className="flex-1">{person.interest}</div>
                                <div className="flex-1">{person.why}</div>
                                <div className="flex-1">{person.activity_favorite}</div>
                                <div className="flex-1">{person.camp}</div>
                                <div className="flex-1">{person.skill}</div>
                                <div className="flex-1">{person.suggestion}</div>
                                <div className="flex-1">
                                    <form>
                                        <input type="checkbox" checked={person.pass} onChange={(e) => this.change(e, person._id)}  />
                                    </form>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default People;
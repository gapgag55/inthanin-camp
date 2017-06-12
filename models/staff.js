const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    fullname: 'string',
    nickName: 'string',
    facebook: 'string',
    generation: 'string',
    interest: 'string',
    skill: 'string',
    camp: 'string',
    activity_favorite: 'string',
    suggestion: 'string',
    why: 'string',
    pass: false,
    createAt: Date
});

var Staff = mongoose.model('staff', schema);

module.exports = Staff;
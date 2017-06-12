const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    username: 'string',
    password: 'string',
    createAt: Date
});

schema.methods.validPassword = function( pwd ) {
    return ( this.password === pwd );
};

var Admin = mongoose.model('admin', schema);

module.exports = Admin;
const mong = require('mongoose');

var userSchema = new mong.Schema( {
    userName: {
        type: String
    },
    password: {
        type: String
    }   

});

module.exports = mong.model('users', userSchema);

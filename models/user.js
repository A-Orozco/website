const mong = require('mongoose');

var userSchema = new mong.Schema( {
    email: {
        type: String
    },
    userName: {
        type: String     
    },
    password: {
        type: String
    }
});

module.exports = mong.model('User', userSchema);
const mong = require('mongoose');
const router = require('../pages');

var postSchema = new mong.Schema( {
    title: {
        type: String
    },
    userName:{
        type: String
    },
    mainText: {
        type: String
    },
    link: {
        type: String
    }

});

module.exports = mong.model('post', postSchema);
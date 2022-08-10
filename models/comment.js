const mong = require('mongoose');

var commentSchema = new mong.Schema({
    author: {
        type: String
    },
    content: {
        type: String
    }
})

module.exports = mong.model('Comment', commentSchema);
const mong = require('mongoose');

var articleSchema = new mong.Schema({
    headLine: {
        type: String
    },
    author: {
        type: String
    },
    description: {
        type: String
    },
    link: {
        type: String
    }

})

module.exports = mong.model('article', articleSchema);
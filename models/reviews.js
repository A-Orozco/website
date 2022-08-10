const mong = require('mongoose');

let reviewSchema = new mong.Schema( {
    title: {
        type: String
    },
    author: {
        type: String
    },
    imgLink: {
        type: String
    },
    extLink: {
        type: String
    },
    opinion: {
        type: String
    }


})

module.exports = mong.model('reviews', reviewSchema);
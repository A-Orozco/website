const mong = require('mongoose');

let reviewSchema = new mong.Schema( {
    title: {
        type: String
    },

    author: {
        type: String
    },
    img: {
        type: String
    },

    opinion: {
        type: String
    }


})

module.exports = mong.model('reviews', reviewSchema);
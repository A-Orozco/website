const mong = require('mongoose');

let reviewSchema = new mong.Schema( {
    
    album: {
        type: String
    },
    artist: {
        type: String
    },

    audio: {
        type: String
    },

    title: {
        type: String
    },

    author: {
        type: String
    },
    
    quip: {
        type: String
    },
    opinion: {
        type: String
    }


})

module.exports = mong.model('reviews', reviewSchema);
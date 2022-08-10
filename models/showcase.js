// model for the showcase containing content from db
const mong = require('mongoose');

var showSchema = new mong.Schema( {
    title: {
        type: String
    },
    author: {
        type: String
    },
    text: {
        type: String
    },
    imgLink: {
        type: String
    }
})

module.exports = mong.model('Showcase', showSchema);
const mong = require('mongoose');



var userSchema = new mong.Schema( {

    userName: {
        type: String,
        required: true,
        min: 1,
        max: 20,
      },

      email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },

      password: {
        type: String,
        required: true,
        min: 6,
        max: 255,
      },

      date: {
        type: Date,
        default: Date.now
      },
    });

module.exports = mong.model('User', userSchema);
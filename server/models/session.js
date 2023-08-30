const mongoose = require("mongoose")

const sessionSchema = new mongoose.Schema({
    date: {
        //array in form of [day, month, year]
        type: Array,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    participants:{
        type: Array,
        default: []
    },
    location: {
        type: String,
        required: false
    },
    tutor: {
        type: String,
        required: false
    }
    
})

module.exports = mongoose.model('session', sessionSchema);

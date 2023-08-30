const mongoose = require("mongoose")

const attendeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: false
    },
    session: {
        type: String,
    },
    //array in form of [day, month, year]
    date: {
        type: Array,
        required: true
    }
    
})

module.exports = mongoose.model('attendee', attendeeSchema)

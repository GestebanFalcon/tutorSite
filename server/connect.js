const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = () => {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.DB_URI);
}

module.exports = dbConnect;

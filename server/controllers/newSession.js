const session = require('../models/session');
const mongooseConnect = require('../connect.js');

const newSession = async (req, res, next) => {
    console.log(req.body)
    await mongooseConnect()
    let location;
    if ('location' in req.body){
        location = req.body.location;
    } else {
        location = false;
    }
    session.create({
        date: req.body.date,
        location: location ? location : "unknown",
        subject: req.body.subject,
    }).then(session => {
        res.status(201).json(session);
    }).catch(err => {
        console.error(err);
        res.status(422).json('no')
    })  
};

module.exports = newSession;
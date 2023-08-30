const router = require('express').Router()

router.post('/createSession', require('../controllers/newSession'))

module.exports = router;
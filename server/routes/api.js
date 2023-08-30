const appointmentRouter = require('./bookingRouter')
const sessionRouter = require('./sessionRouter')

const router = require('express').Router()

router.use('/appointments', appointmentRouter)
router.use('/sessions', sessionRouter)

module.exports = router;
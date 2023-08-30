const express = require('express')
const cors = require('cors')
const router = require('./routes/api')

require('dotenv').config()

const PORT = process.env.PORT;

const app = express();

app.use(cors())
app.use(express.json())
app.use('/api', router)

app.listen(3000, () => {
    console.log(`listening to ${PORT}`)
})


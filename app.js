require('dotenv').config()

const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.SERVER_PORT || 3333

const bookRoute = require('./src/routes/bookRouter')

app.use(cors())
app.listen(port, () => {
  console.log(`\n Server is running on port : ${port} \n `)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })) // body type

app.use('/book', bookRoute)
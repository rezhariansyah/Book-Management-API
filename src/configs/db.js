require('dotenv').config() // Initialize dotenv config

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASS,   
    database: process.env.DB_NAME || 2000
})

connection.connect((err) => {
    if (err) console.log(err)
})

module.exports = connection
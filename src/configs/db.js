require('dotenv').config() // Initialize dotenv config

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'remotemysql.com',
    user: process.env.DB_USERNAME || 'uQgL60k3H4',
    password: process.env.DB_PASS || 'O7s7zY0X94',   
    database: process.env.DB_NAME || 'uQgL60k3H4'
})

connection.connect((err) => {
    if (err) console.log(err)
})

module.exports = connection
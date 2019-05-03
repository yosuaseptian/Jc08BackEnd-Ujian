const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'yosuaseptian',
    password: 'waksjenk.101',
    host: 'db4free.net',
    database: 'jc8expresmsql',
    port: '3306'
})

module.exports = conn
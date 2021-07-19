import mysql from "mysql2"

const pool = mysql.createPool({
    host: 'localhost',
    user: "cenniki",
    port: 3306,
    database: "aktecenniki",
    password: "as90.QW00@"

})
module.exports = pool.promise()
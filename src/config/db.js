const mysql = require('mysql2')

const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'chaeng',
    user: 'root',
    password: '8566009l'
})

connection.getConnection((err, conn) => {
    conn.connect((err) => {
        if (err) {
            console.log("连接失败:", err);
        } else {
            console.log("数据库连接成功~");
        }
    })
});

// 操作数据库时用promise操作
module.exports = connection.promise()
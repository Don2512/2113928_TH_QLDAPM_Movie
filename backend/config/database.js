const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Movie',
});

// Kết nối
conn.connect((err) => {
    if (err) throw err;
    console.log('Kết nối thành công!');
});



module.exports = conn;
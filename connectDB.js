import mysql from 'mysql2';

// Tạo kết nối
const pool = mysql.createPool({
    host: 'localhost', // Địa chỉ máy chủ
    user: 'root', // Tên người dùng
    password: '', // Mật khẩu
    database: 'mysql_node' // Tên cơ sở dữ liệu
});
const connection = pool.connection();
export default connection


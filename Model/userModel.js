import pool from '../connectDB';
const getAllUser = async() =>{
    const [rows, fields] = await pool.execute('Select * from users')
    return rows
}
export default {getAllUser}
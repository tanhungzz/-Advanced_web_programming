import pool from '../connectDB';
const getAllUser = async() =>{
    const [rows, fields] = await pool.execute('Select * from users')
    return rows
}

const detailUser = async(id) =>{
    const [rows, fields] = await pool.execute('Select * from users where id = ?',[id])
    return rows[0]
}

export default {getAllUser,
                detailUser
}
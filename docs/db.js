import mysql from "mysql2"
import dotenv from "dotenv"
dotenv.config()
const pool=mysql.createPool({
    host:process.env.HOST,
    root:process.env.ROOT,
    user:process.env.USER,
database:process.env.DATABASE,
password:process.env.PASSWORD
})

export default pool.promise()
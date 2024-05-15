
import express from"express"

import router from "./router/student.js"
import pool from "./docs/db.js"
const app=express()
app.use(express.json())
app.use(router)
const port=3000
pool
.query('SELECT 1')
.then(()=>{
    console.log("mysql database connected")
    app.listen(port,()=>{
        console.log(`server started on port ${port}`)
    })
})
.catch((error)=>{
    console.log(error.message)
})

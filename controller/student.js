//insert student into table
import pool from "../docs/db.js"
export const createStudent=async(req,res,next)=>{
    try{
        
const student= await pool.query("INSERT INTO `students`(`name`, `class`,`id`) VALUES (?,?,?)",[req.body.name,req.body.class,req.body.id])
if(!student){
    return res.status(500).json({message:"something went wrong please try again"})
}
res.status(201).json({message:student})
    }
    catch(error){
        console.log(error.message)
    }
}
//get all student
export const getAllStudent=async(req,res,next)=>{
    try{
const getAll=await pool.query("SELECT * FROM `students`")
res.status(200).json({message:getAll[0]})
    }
    catch(error){
console.log(error.message)
    }   

}
//get student by name
export const getStudent=async(req,res,next)=>{
    try{
        const getOne=await pool.query("SELECT `name`, `class`, `id` FROM `students` WHERE `name`=?",[req.query.name])
        res.status(200).json({message:getOne[0]})
            }
            catch(error){
        console.log(error.message)
            }  
}
//update student
export const updateStudent=async(req,res,next)=>{
    try{
    const update=await pool.query("UPDATE `students` SET `name`=?,`class`=?,`id`=? WHERE `name`=?",[req.body.name,req.body.class,req.body.id,req.query.name])
    res.status(200).json({message:update})
        }
        catch(error){
    console.log(error.message)
        }  
}
//delete student
export const removeStudent=async(req,res,next)=>{
    try{
        const remove=await pool.query("DELETE FROM `students` WHERE id=?",[req.query.id])
        res.status(200).json({message:"student removed successfully"})
            }
            catch(error){
        console.log(error.message)
            }  
}

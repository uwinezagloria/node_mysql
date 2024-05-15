import express from "express"
import { createStudent, getAllStudent, getStudent, removeStudent, updateStudent } from "../controller/student.js";
const router=express.Router()
router.route("/add/student").post(createStudent)
router.route("/get/students").get(getAllStudent)
router.route("/get/student").get(getStudent)
router.route("/update").patch(updateStudent)
router.route("/remove/student").delete(removeStudent)
export default router
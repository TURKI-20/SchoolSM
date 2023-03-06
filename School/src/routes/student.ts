import { Router } from "express";
import {   } from "../controller/teacher";
let router = Router();
import validate from "../middleware/validate";
import { addstudent} from "../zod.schema/Zstudent";
import { getAllStudents, getStudentById, addStudent } from "../controller/student";


router.get("/", getAllStudents);

 router.post("/", validate(addstudent), addStudent);

  router.get('/byId/:id', getStudentById)

  export default router;
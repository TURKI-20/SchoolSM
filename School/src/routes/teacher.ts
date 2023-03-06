import { Router } from "express";
import { addTeacher, getAllTeachers, getTeacherById } from "../controller/teacher";
let router = Router();
import validate from "../middleware/validate";
import { addteacher } from "../zod.schema/Zteacher";


router.get("/", getAllTeachers);

 router.post("/", validate(addteacher), addTeacher);

  router.get('/byId/:id', getTeacherById)

  export default router;
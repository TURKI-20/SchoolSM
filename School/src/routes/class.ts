import { Router } from "express";
import {   } from "../controller/teacher";
let router = Router();
import validate from "../middleware/validate";
import { addclassrom} from "../zod.schema/Zclass";
 import {
     addClassRoom,
     getAllClassRooms,
      getClassRoomById
     } from "../controller/class";


router.get("/", getAllClassRooms);

 router.post("/", validate(addclassrom), addClassRoom);

  router.get('/byId/:id',  getClassRoomById)

  export default router;
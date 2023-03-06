import { Router } from "express";
import {   } from "../controller/teacher";
let router = Router();
import validate from "../middleware/validate";
import { addprofile} from "../zod.schema/Zprofile";
 import { addProfile, getProfileById, getProfiles } from "../controller/profile";


router.get("/", getProfiles);

 router.post("/", validate(addprofile), addProfile);

  router.get('/byId/:id',  getProfileById)

  export default router;
import express from 'express'
const router = express.Router();
import { userExperienceHandler } from '../handlers/userExperienceHandler.mjs'




router.post('/user/add/experience/:user_id', userExperienceHandler) 
router.put("/user/edit/experience/:user_id/:experience_id", userExperienceHandler)
router.delete("/user/delete/experience/:user_id/:experience_id", userExperienceHandler)



export default router
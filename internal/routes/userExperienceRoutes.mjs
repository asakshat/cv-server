import express from 'express'
const router = express.Router();
import { userExperienceHandler } from '../handlers/userExperienceHandler.mjs'




router.post('/user/experience', userExperienceHandler) 
router.put("/user/experience", userExperienceHandler)

export default router
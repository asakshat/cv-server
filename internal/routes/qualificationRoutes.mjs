import express from 'express'
const router = express.Router();
import {qualificationsHandler} from '../handlers/qualificationHandler.mjs'

router.post('/user/add/qualification/:user_id', qualificationsHandler) 
router.put("/user/edit/qualification/:user_id/:qual_id", qualificationsHandler)
router.delete("/user/delete/qualification/:user_id/:qual_id", qualificationsHandler)



export default router
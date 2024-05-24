import express from 'express'
const router = express.Router();
import { postUserInfo } from '../handlers/userInfoHandler.mjs'

router.post('/user/add/userinfo/:user_id', postUserInfo) 
router.put('/user/edit/userinfo/:user_id/:info_id', postUserInfo) 
router.delete('/user/delete/userinfo/:user_id/:info_id', postUserInfo)


export default router
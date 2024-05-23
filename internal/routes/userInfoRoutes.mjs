import express from 'express'
const router = express.Router();
import { userInfoHandler } from '../handlers/userInfoHandler.mjs'




router.post('/user/info', userInfoHandler) 

export default router
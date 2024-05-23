import express from 'express'
import { loginUser ,signUpUser} from '../handlers/authHandler.mjs'
const router = express.Router();

// auth 
router.post('/user/login',loginUser)
router.post('/user/signup',signUpUser)

// user info 
router.post('/user/info', userInfoHandler) 

export default router
import express from 'express'
import { loginUser ,signUpUser,} from '../handlers/authHandler.mjs'
const router = express.Router();

router.post('/user/login',loginUser)
router.post('/user/signup',signUpUser)


export default router
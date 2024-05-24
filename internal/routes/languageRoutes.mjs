import express from 'express'
import { languageHandler } from '../handlers/languageHandler.mjs';
const router = express.Router();

router.post('/user/add/language/:user_id',languageHandler)
router.put('/user/edit/language/:user_id/:lang_id',languageHandler)
router.delete('/user/delete/language/:user_id/:lang_id',languageHandler)



export default router
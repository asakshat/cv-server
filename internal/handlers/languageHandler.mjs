import { postLanguage,editLanguage,deleteLanguage } from "../functions/languageFunctions.mjs";

export const languageHandler = async (req, res) => {
  const user_id = req.params.user_id;
  const lang_id = req.params.lang_id;
  const {lang_name, lang_lvl} = req.body;
  
  if (req.method === "POST") {
    await postLanguage(user_id, lang_name, lang_lvl);
    res.status(201).json({ message: 'User language added' });
  } else if (req.method === "PUT") {
    await editLanguage(user_id, lang_id, lang_name, lang_lvl);
    res.status(200).json({ message: 'User language updated' });
  } else if (req.method === "DELETE") {
    await deleteLanguage(user_id, lang_id);
    res.status(200).json({ message: 'User language deleted' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });  
  }
} 
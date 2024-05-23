import { postUserInfoFunctions } from "../functions/userInfoFunctions.mjs";

export const userInfoHandler = async (req, res) => {
  const { user_id, first_name, last_name , email, address , zipcode , gender , driving_license} = req.body;
  try {
    await postUserInfoFunctions(user_id, first_name, last_name , email, address , zipcode , gender , driving_license);
    res.status(200).json({ message: 'User info added' }); }
  catch (err) {
    res.status(400).json({ error: err.message });
  }
} 
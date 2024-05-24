import { editUserInfoFunctions, postUserInfoFunctions,deleteUserInfoFunctions } from "../functions/userInfoFunctions.mjs";

export const postUserInfo = async (req, res) => {
  const {  first_name, last_name , email, address , zipcode , gender , driving_license} = req.body;
  const user_id = req.params.user_id;
  const info_id = req.params.info_id;

  if (req.method === 'POST') {
    try {
      await postUserInfoFunctions(user_id, first_name, last_name , email, address,zipcode,gender,driving_license);
      res.send('User info added');  
    } catch (err) {
      res.status(400).json({ error: err.message });
    };
  } else if (req.method === 'GET') {
  } else if (req.method === 'PUT') {
    try{
      await editUserInfoFunctions(info_id,user_id, first_name, last_name , email, address , zipcode , gender,driving_license);
      res.send('User info updated');  

    }catch (err) {
      res.status(400).json({ error: err.message });
    }
  } else if (req.method === 'DELETE') {
    try{
      await deleteUserInfoFunctions(user_id,info_id);
      res.send('User info deleted');
    } catch (err) {
      res.status(400).json({ error: err.message });
    } 
  } else { 
    res.status(405).send({ error: 'Method not allowed' });
  }
  
} 
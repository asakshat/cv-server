import { executeQuery } from "../../db/db.mjs";

export const postUserInfoFunctions = async (info_id,user_id, first_name, last_name , email, address , zipcode , gender , driving_license) => {
  try {
      await executeQuery(`INSERT INTO "UserInfo" (user_id, first_name, last_name , email, address,zip_code,gender,driving_license) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) WHERE id = $9`,[ user_id, first_name, last_name , email, address , zipcode,gender,driving_license,info_id] );
    }
  catch (err) {
    throw new Error(err.message);
  }
 }

 export const editUserInfoFunctions = async (info_id,user_id, first_name, last_name , email, address , zipcode , gender , driving_license) => {
  try {
   await executeQuery(`UPDATE "UserInfo" SET first_name = $1, last_name = $2, email = $3, address = $4, zip_code = $5, gender = $6, driving_license = $7 WHERE user_id = $8 AND id=$9`, [first_name, last_name, email, address, zipcode, gender, driving_license, user_id,info_id]);
 } catch (err) {
    throw new Error(err.message);
  }
 }

 export const deleteUserInfoFunctions = async (user_id,user_info_id) => {  
  try {
    await executeQuery(`DELETE FROM "UserInfo" WHERE user_id = $1 AND id =$2`, [user_id, user_info_id]);
  } catch (err) {
    throw new Error(err.message);
  } 
 }


 
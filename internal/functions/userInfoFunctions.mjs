import { executeQuery } from "../database/database.js";

export const postUserInfoFunctions = async (user_id, first_name, last_name , email, address , zipcode , gender , driving_license) => {
  try {
     const info = await executeQuery("INSERT INTO user_info (user_id, first_name, last_name , email, address,zipcode,gender,driving_license) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",[ user_id, first_name, last_name , email, address , zipcode,gender,driving_license] );
     return info[0]
    }
     
  catch (err) {
    throw new Error(err.message);
  }
 }
 export const editUserInfoFunctions = async (user_id, first_name, last_name , email, address , zipcode , gender , driving_license) => {
  try {
    await executeQuery("UPDATE user_info (user_id, first_name, last_name , email, address,zipcode,gender,driving_license) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",[ user_id, first_name, last_name , email, address , zipcode, gender, driving_license] );
 } catch (err) {
    throw new Error(err.message);
  }
 }
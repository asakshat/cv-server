import { executeQuery } from "../database/database.js";

export const postExperienceFunctions = async (user_id, job_title, city, employer, start_date, end_date, job_description) => {
  try {
     const experience = await executeQuery("INSERT INTO Experience (user_id, job_title, city, employer, start_date, end_date, job_description) VALUES ($1, $2, $3, $4, $5, $6, $7)",[ user_id, job_title, city, employer, start_date, end_date, job_description] );
     return experience[0]
    }
     
  catch (err) {
    throw new Error(err.message);
  }
 }
 export const editExperienceFunctions = async (user_id, job_title, city, employer, start_date, end_date, job_description) => {
  try {
    await executeQuery("UPDATE user_info (user_id, job_title, city, employer, start_date, end_date, job_description) VALUES ($1, $2, $3, $4, $5, $6, $7)",[ user_id, job_title, city, employer, start_date, end_date, job_description] );
 } catch (err) {
    throw new Error(err.message);
  }
 }

 export const deleteExperienceFunction = async (user_id, experience_id) => {
    try {
      const deletedExperience = await executeQuery(
        "DELETE FROM Experience WHERE user_id = $1 AND experience_id = $2 RETURNING *", 
        [user_id, experience_id]
      );
  
      if (deletedExperience.length === 0) {
        throw new Error("Experience not found for this user"); 
      }
  
      return deletedExperience[0]; 
    } catch (err) {
      throw new Error(err.message);
    }
  };
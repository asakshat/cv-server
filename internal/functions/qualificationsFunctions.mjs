import {executeQuery} from '../../db/db.mjs';

export const postQualification = async (user_id, city, school_name, start_date, end_date, description, degree_name) => {
    try {
        const query = `INSERT INTO "Qualification" (user_id, city, school_name, start_date, end_date, description, degree_name) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
        const result = await executeQuery(query, [user_id, city, school_name, start_date, end_date, description, degree_name]);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export const editQualification = async (user_id, qual_id, city, school_name, start_date, end_date, description, degree_name) => {
    try {
        const query = `UPDATE "Qualification"  SET city = $1, school_name = $2, start_date = $3, end_date = $4, description = $5, degree_name = $6 WHERE user_id = $7 AND id = $8`;
        const result = await executeQuery(query, [city, school_name, start_date, end_date, description, degree_name, user_id, qual_id]);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}

export const deleteQualification = async (user_id, qual_id) => {
    try {
        const query = `DELETE FROM "Qualification"  WHERE user_id = $1 AND id = $2`;
        const result = await executeQuery(query, [user_id, qual_id]);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}
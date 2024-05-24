import { executeQuery } from "../../db/db.mjs";
export const postLanguage = async (user_id, lang_name,lang_lvl ) => {
    try {
        const query = `INSERT INTO "Language" (user_id, lang_name, lang_level) VALUES ($1, $2, $3)`;
        const result = await executeQuery(query, [user_id, lang_name, lang_lvl]);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}
export const editLanguage = async (user_id, lang_id, lang_name, lang_lvl) => {  
    try {
        const query = `UPDATE "Language"  SET lang_name = $1, lang_level = $2 WHERE user_id = $3 AND id = $4`;
        const result = await executeQuery(query, [lang_name, lang_lvl, user_id, lang_id]);
        return result;
    } catch (error) {
        throw new Error(error);
    }

}
export const deleteLanguage = async (user_id, lang_id) => {
    try {
        const query = `DELETE FROM "Language"  WHERE user_id = $1 AND id = $2`;
        const result = await executeQuery(query, [user_id, lang_id]);
        return result;
    } catch (error) {
        throw new Error(error);
    }
}
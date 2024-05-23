import { 
    postExperienceFunctions, 
    editExperienceFunctions, 
    deleteExperienceFunction 
} from "../functions/experienceInfoFunctions.mjs";

export const userExperienceHandler = async (req, res) => {
    const { user_id, experience_id, job_title, city, employer, start_date, end_date, job_description } = req.body;

    try {
        if (req.method === "POST") { 
            await postExperienceFunctions(user_id, job_title, city, employer, start_date, end_date, job_description);
            res.status(201).json({ message: 'User experience added' }); 
        } else if (req.method === "PUT") {
            const updatedExperience = await editExperienceFunctions(user_id, experience_id, job_title, city, employer, start_date, end_date, job_description);
            res.status(200).json({ message: 'User experience updated', experience: updatedExperience }); 
        } else if (req.method === "DELETE") { 
            await deleteExperienceFunction(user_id, experience_id); 
            res.status(200).json({ message: 'User experience deleted' });
        } else {
            res.status(405).json({ error: 'Method not allowed' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message }); 
    }
};

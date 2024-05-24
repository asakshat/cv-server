import { postQualification, editQualification,deleteQualification} from "../functions/qualificationsFunctions.mjs";

export const qualificationsHandler = async (req, res) => { 
  const user_id = req.params.user_id;
  const qual_id = req.params.qual_id;
  const {city, school_name,start_date,end_date,description, degree_name} = req.body;

    try {
    if (req.method === "POST") { 
        await postQualification(user_id, city, school_name, start_date, end_date, description, degree_name);
        res.status(201).json({ message: 'User qualifications added' }); 
    } else if (req.method === "PUT") {
        const updatedExperience = await editQualification(user_id, qual_id, city, school_name, start_date, end_date, description, degree_name);
        res.status(200).json({ message: 'User qualifications updated'}); 
    } else if (req.method === "DELETE") { 
        await deleteQualification(user_id, qual_id); 
        res.status(200).json({ message: 'User qualifications deleted' });
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
} catch (err) {
    res.status(500).json({ error: err.message }); 
}
}
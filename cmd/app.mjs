import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { authenticateToken } from '../internal/middlewares/authenticate.mjs';
import userAuth from '../internal/routes/authRoutes.mjs';
import userInfo from '../internal/routes/userInfoRoutes.mjs';
import userExperience from '../internal/routes/userExperienceRoutes.mjs';
import userQualification from '../internal/routes/qualificationRoutes.mjs';
import userLanguage from '../internal/routes/languageRoutes.mjs';



dotenv.config();
const port = process.env.PORT || 3000;
const app = express();


const allowedOrigins = [
	'http://127.0.0.1:5173',
	'http://localhost:5173',
];
const corsOptions = {
	origin: (origin, callback) => {
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	credentials: true,
	methods: ['GET', 'POST', 'DELETE', 'PATCH'],
	allowedHeaders: ['Content-Type', 'Authorization', 'username'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello Express');
});


//Auth routes
app.use('/api', userAuth);

// anyhting after this will get token
app.use('/api', userInfo);
app.use('/api' , userExperience)
app.use('/api', userQualification)
app.use('/api', userLanguage)




app.listen(port), () => {
	console.log(`Server is running on port ${port}`);
};

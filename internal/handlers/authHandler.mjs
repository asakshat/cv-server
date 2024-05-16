import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { findUserIdByUsername } from "../../db/queries.mjs";
import {promisify} from 'util'
import { loginFunction,signUpFunction } from '../functions/authFunctions.mjs';

dotenv.config();

const sign = promisify(jwt.sign);


const createToken = async (id, expiresIn) => {
	return await sign({ id }, process.env.SECRET, { expiresIn });
};

const loginUser = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await loginFunction(email, password);
		const accessToken = await createToken(user.id, '1d');
		res.status(200).json({
			username: user.username,
			email: user.email,
			accessToken: accessToken,
			user_id: user.user_id,
		});
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};


const signUpUser = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		await signUpFunction(username, email, password);
		const userId = await findUserIdByUsername(username);
		const accessToken = await createToken(userId, '1d');

		res
			.status(200)
			.json({ username: username, email: email, accessToken: accessToken });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

import dotenv from 'dotenv';
import { databaseMethod } from '../db/db';

export const handle = async ({ event, resolve }) => {
	dotenv.config();
	databaseMethod.connect();

	const response = await resolve(event);
	return response;
};
//set up mongodb atlas to test db

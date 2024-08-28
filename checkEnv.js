import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

console.log('JWT_SECRET:', process.env.JWT_SECRET);

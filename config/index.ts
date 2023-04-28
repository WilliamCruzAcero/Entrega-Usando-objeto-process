import dotenv from 'dotenv';
dotenv.config();

export const PORT = parseInt(process.env.PORT || process.argv[3]);
export const MONGO_URI = process.env.MONGO_URI || "localhost:8080";
export const SECRET = process.env.SECRET;
export const TWILIO_ACOUNT_SID = process.env.TWILIO_ACOUNT_SID;
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
export const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
export const GMAIL_USER = process.env.GMAIL_USER;
export const GMAIL_PASSWORD = process.env.GMAIL_PASSWORD;
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const SMTP_PORT = process.env.SMTP_PORT;

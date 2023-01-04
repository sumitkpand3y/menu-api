import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGO_DB_URI || 'mongodb://127.0.0.1:27017/';
const port = process.env.PORT || 7000;

export const confiq = {
    mongo:{
        url:mongoUrl
    },
    server:{
        port:port
    }
}
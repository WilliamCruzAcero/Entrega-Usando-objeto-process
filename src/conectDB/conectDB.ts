import mongoose from 'mongoose';
import { MONGO_URI } from '../../config';

async function conectDB() {
    mongoose.set('strictQuery', false);
    await mongoose.connect(MONGO_URI)
    
}

export default () => conectDB().catch(err => console.log(err));
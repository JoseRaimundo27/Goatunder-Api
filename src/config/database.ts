import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI as string;

if (!uri) {
  throw new Error('MONGO_URI must be defined in environment variables');
} 

export async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    throw err;
  }
}
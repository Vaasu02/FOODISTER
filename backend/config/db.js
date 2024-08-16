import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://chourasiavasu43:jJrTKrIXlUOV46br@cluster0.zinsm.mongodb.net/foodister');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;

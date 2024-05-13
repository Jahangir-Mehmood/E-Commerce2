import mongoose from 'mongoose';

const connectDB = async () => {
    try {

        await mongoose.connect("mongodb+srv://mehmoodjahangir328:digi9266p@cluster0.9qthtvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        
        console.log('Successfully Connected to Database')
    } catch (error) {
        console.log('DB connection error', error.message, error.status);
    }
}
export default connectDB;


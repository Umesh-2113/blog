import mongoose from 'mongoose';

const connectDB = async() =>{
    try{
        const MONGODB_URI = "mongodb+srv://Monalisa7:Monalisa@cluster0.kognena.mongodb.net/?retryWrites=true&w=majoritymongodb+srv://Monalisa7:Monalisa@cluster0.kognena.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected succesfully');
    }
    catch(error){
        console.error('Failed to connect to MongoDB stupid F!',error);
        return;
    }
};
export default connectDB;


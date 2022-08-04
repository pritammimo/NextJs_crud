
import mongoose from 'mongoose'
const MONGO_URI="mongodb+srv://Pritam:KwZ2ExN6rZ5IqHFy@cluster0.liybn.mongodb.net/?retryWrites=true&w=majority"
const connectMongo=async()=>{
    try{
   const {connection }= await mongoose.connect(MONGO_URI)
   if(connection.readyState ==1){
    console.log("Database Connected")
   }
    }catch(errors){
        return Promise.reject(errors)
    }
}
export default connectMongo
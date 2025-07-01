import mongoose from "mongoose";

export const connectDB = async () => {
//MongoDb Instance
const MONGODB_URI = 'mongodb+srv://elation:elation123@cluster0.xqpbws7.mongodb.net/express'

//establishing mongodb connection
await mongoose.connect(MONGODB_URI).then(() => { //await makes it so database is connected first before starting application
  console.log("Database Connected")
})
}   
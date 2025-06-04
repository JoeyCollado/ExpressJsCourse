import express, { response } from "express"; //after configuring package.json and adding type: "module"
import multer from "multer";
import { storage } from "./config/multer.js";
import mongoose from "mongoose";

// app instance
const app = express();
//backend
const PORT = 3000;
//
const upload = multer({ storage,
                        limits:{
                            fileSize:1024000
                        }
 }); //instance
//MongoDb Instance
const MONGODB_URI = 'mongodb+srv://elation:elation123@cluster0.xqpbws7.mongodb.net/express'

//establishing mongodb connection
mongoose.connect(MONGODB_URI).then(() => {
  console.log("Database Connected")
})

app.use(express.urlencoded({ extended: true })); //form url encoded
//
app.use(upload.single("image")); //normal form data

//disk storage configuration

app.get("/", (request, response) => {
  response.send("Hello Express");
});

//route
app.post("/form", (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("Form received");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//mongodb
//using mongodbatlas service to create a mongodb database
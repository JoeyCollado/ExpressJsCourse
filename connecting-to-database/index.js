import express, { response } from "express"; //after configuring package.json and adding type: "module"
import { connectDB } from "./config/db.js";

// app instance
const app = express();
//backend
const PORT = 3000;
//importing mongodb connection logic
await connectDB();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//routes
app.post('/person', express.json(), (req,res) => {
  console.log(req.body);
  res.send("Person added")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//mongodb
//using mongodbatlas service to create a mongodb database

//creating a schema and a model to perform crud operations in mongodb
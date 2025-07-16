import express, { response } from "express"; //after configuring package.json and adding type: "module"

// app instance
const app = express();
//backend
const PORT = 3000;
//adding cookie parser as middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello express");
});

//Synchronous Error
app.get('/sync-error', (req,res) => { //always use try catch block when handling sync error
  try {
     throw new error('Smth went wrong!')
  } catch (error) {
    next(error)
  }
})

//

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//npm i express-generator

//to create an express app
//use the npm package
//do the command
//open the folder with vscode
//instal npm package with = npm install
//you're set to go
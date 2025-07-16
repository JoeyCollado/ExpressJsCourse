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
app.get('/sync-error', (req,res, next) => { //always use try catch block when handling sync error
  try {
     throw new Error('Smth went wrong!')
  } catch (error) {
    next(error)
  }
})

//Asynchronous Error
app.get('/async-error', async (req,res, next) => {
  try {
    await Promise.reject(new Error('Async error occured'))
  } catch (error) {
    next(error)
  }
})

//error handling
app.use((err,req,res,next) => {
  console.error(err.message)
  console.log(err.stack)
  res.status(500).json({message:err.message})
})

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
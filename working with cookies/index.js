import express from "express"; //after configuring package.json and adding type: "module"
import cookieParser from "cookie-parser"; //importing cookie-parser

// app instance
const app = express();
//backend
const PORT = 3000;
//adding cookie parser as middleware
app.use(cookieParser())

app.get("/", (req, res) => {
  res.cookie('name', 'express-app') //adding cookie as response
  res.send("Hello Express");
});

//new request
app.get('/fetch', (req,res) => {
  console.log(req.cookies);
  res.send("API called")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//cookies = are small data files sent from the server to the client, stored on the client browser.
//          they are sent back with every request to the server

//use of cookies 
//sesion management - maintaining user login session
//personalization   - enhancing user experience with recommendations
//user tracking     - monitoring user behaviour on the website

//npmjs.com - website
//npm i cookie-parser - package
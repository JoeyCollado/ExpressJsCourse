import express from "express"; //after configuring package.json and adding type: "module"


// app instance
const app = express();
//backend
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express");
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//cookies = are small data files sent from the server to the client, stored on the client browser.
//          they are sent back with every request to the server

//use of cookies 
//sesion management - maintaining user login session
//personalization   - enhancing user experience with recommendations
//user tracking     - monitoring user behaviour on the website


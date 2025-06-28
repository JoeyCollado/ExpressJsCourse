import express from "express"; //after configuring package.json and adding type: "module"
import cookieParser from "cookie-parser"; //importing cookie-parser

// app instance
const app = express();
//backend
const PORT = 3000;
//adding cookie parser as middleware
app.use(cookieParser())

app.get("/", (req, res) => {
  res.cookie('name', 'express-app', {maxAge : 360000}) //adding cookie as response
  res.send("Hello Express");
});

//new request
app.get('/fetch', (req,res) => {
  console.log(req.cookies);
  res.send("API called")
})

//removing cookie manually
app.get('/remove-cookie', (req,res) => {
  res.clearCookie('name')
  res.send('Cookie cleared')
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//session management
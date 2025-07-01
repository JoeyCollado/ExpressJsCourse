import express from "express"; //after configuring package.json and adding type: "module"
import cookieParser from "cookie-parser"; //importing cookie-parser

// app instance
const app = express();
//backend
const PORT = 3000;
//adding cookie parser as middleware
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello Express");
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//session management
//npmjs.com
//npm install express-session

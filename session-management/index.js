import express from "express"; //after configuring package.json and adding type: "module"
import cookieParser from "cookie-parser"; //importing cookie-parser
import session from "express-session";

// app instance
const app = express();
//backend
const PORT = 3000;
//adding cookie parser as middleware
app.use(cookieParser())
//set up session as middleware
app.use(session({
  secret: 'sample-secret',
  resave: false, //session will not be save again and again once we apply changes
  saveUninitialized: false, //prevent empty session to be stored
}))

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//route
//basic page view session
app.get('/visit', (req,res) => {
  if(req.session.page_views) {
    
  } //checks if page views property is available
})



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//session management
//npmjs.com
//npm install express-session

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
app.get('/visit', (req,res) => { //checks if page views property is available
  if(req.session.page_views) {
    req.session.page_views++;
    res.send(`You Visited this page ${req.session.page_views} times`) //response
  }else{ // if you are visiting for the first time
    req.session.page_views = 1
    res.send("Welcome to this page for the first time!")
  } 
})

//route for removing session
app.get('/remove-visit', (req,res) => {
  req.session.destroy() //all sessions and user data will be removed from the backend memory
  res.send('sesion removed')
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//session management
//npmjs.com
//npm install express-session
//done
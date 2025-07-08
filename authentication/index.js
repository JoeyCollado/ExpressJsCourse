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

//session based authentication
//routes

const users = [] //array

app.post('/register', async (req,res) => { //everytime we access this api we will get user name and password and store properties in array
   const {username, password} = req.body;
   users.push({  //registering objects two array
    username,
    password
   })
   res.send('User Registered')
})

app.post('/login', async (req,res) => { //everytime we access this api we will get user name and password and store properties in array
  const {username, password} = req.body;
  const user = users.find(u => u.username === username) //verification
  if(!user || password !== user.password){ //condition to check if credentials are matched
      return res.send('Not Authorized')
  }// if correct create session
  req.session.user = user
  res.send('User Log in')
})

//
app.get('dashboard', (req,res) => {
  if(!req.session.user){ //if we don't have user available do this
    return res.send('Unauthorized')
  } //else
  res.send(`Welcome, ${req.session.user.username}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//authentication in expressjs
//                             is the process of verifying the identity of a user. ensures that only authorized users can access certain resources

/*
implementing user authenticaion in express js

There are two main ways to implement authentication in an ExpressJS application:

1. Session-Based Authentication (Uses cookies and sessions)
2. Token-Based Authentication (Uses JWT or OAuth tokens)

The basic authentication flow:

1. The user sends login credentials (email/password).
2. The server verifies the credentials against a database.
3. If valid, the server responds with a session (cookie) or a JWT token.
4. The client stores this session or token for subsequent requests.
5. For each request, the client sends the session/token for verification.
*/
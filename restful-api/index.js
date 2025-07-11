import express, { response } from "express"; //after configuring package.json and adding type: "module"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// app instance
const app = express();
//backend
const PORT = 3000;
//adding cookie parser as middleware

app.use(express.json());

const users = []; //array

app.post("/register", async (req, res) => {
  //everytime we access this api we will get user name and password and store properties in array
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10); //hash the password and store password in array, 10 refers to number of rounds
  users.push({
    //registering objects two array
    username,
    password: hashedPassword,
  });
  res.send("User Registered");
});

app.post("/login", async (req, res) => {
  //everytime we access this api we will get user name and password and store properties in array
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username); //verification
  if (!user || !(await bcrypt.compare(password, user.password))) {
    //condition to check if credentials are matched
    return res.send("Not Authorized");
  } // if correct create session
  //send token to the response
  const token = jwt.sign({ username }, "test#secret"); //data, secretKey
  res.json({ token });
});

//
app.get("/dashboard", (req, res) => {
  try {
    //can only be accessed by user who is logged in the server
    //adding verification method so that if its correct we can access dashboard route
    //get token from the header
    const token = req.header("Authorization");
    //send token on server
    //verify token
    const decodedToken = jwt.verify(token, "test#secret");
    //check if username is available
    if (decodedToken.username) {
      res.send(`Welcome ${decodedToken.username}`);
    } // if incorrect
    else {
      res.send("Access Denied");
    }
  } catch (error) {
    res.send("Access Denied");
  }
});

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

/*
JWT-Based Authentication

JWT (JSON Web Token) is a stateless authentication method that sends a token instead of storing sessions on the server.

How JWT Works:

The user logs in and receives a JWT token.

The client stores the token (in localStorage or Authorization Header).

The token is sent with every request.

The server verifies the token and allows access.
*/

//npm i jsonwebtoken = jwt authentication package
//npm i bcryptjs = pacakge = use to encrypt user password and save password in storage

//using jwt based authentication to protect any route
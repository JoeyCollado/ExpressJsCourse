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

/*
RESTful APIs with ExpressJS

A RESTful API is a web service that follows REST principles, using HTTP methods to perform actions on resources.

REST API Principles

1 Stateless
• Every request from the client must contain all the necessary information.

2 Client-Server Architecture
• The frontend and backend communicate via a well-defined API.

3 Resource-Based


4 HTTP Methods for CRUD Operations

HTTP Method	                       Action	              Example Endpoint
GET	                               Read Data	          /api/product/list
POST	                             Create Data	        /api/product/add
PUT	                               Update Data	        /api/product/update
DELETE	                           Remove Data	        /api/product/del/:id
*/

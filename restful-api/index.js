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


Use Proper HTTP Status Codes
Each status code belongs to a particular class, which conveys the type of response:

2xx (Success): These codes indicate that the request was successfully processed by the server.

* 200 OK: The request was successful, and the server has sent back the requested data (for GET requests).

* 201 Created: The resource was successfully created (for POST requests).

* 204 No Content: The request was successful, but there’s no data to return (commonly used for DELETE or PUT requests).

4xx (Client Errors): These codes indicate that there was an issue with the client’s request, meaning the client needs to fix something.

400 Bad Request: The server cannot process the request due to bad syntax.

401 Unauthorized: The request lacks valid authentication credentials.

403 Forbidden: The server understood the request, but it refuses to authorize it.

404 Not Found: The requested resource was not found on the server.

422 Unprocessable Entity: The server understands the content type and syntax, but the request cannot be processed (often used in validation errors).


5xx (Server Errors): These codes indicate that the server has failed to fulfill a valid request.

500 Internal Server Error: A generic error message when the server encounters an unexpected condition.

502 Bad Gateway: The server received an invalid response from an upstream server.

503 Service Unavailable: The server is currently unavailable (e.g., due to being overloaded or down for maintenance).

Why Status Codes Matter:

Clarity: They give the client or user a clear indication of what happened with the request.

Error Handling: They allow the client to properly handle different kinds of errors (e.g., retrying the request or notifying the user).

Standardization: They provide a consistent way to communicate results across different APIs, making it easier for developers to work with APIs.

In short, status codes are necessary to help the client understand the outcome of the request and to handle any issues accordingly.
*/

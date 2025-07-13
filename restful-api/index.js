import express, { response } from "express"; //after configuring package.json and adding type: "module"


// app instance
const app = express();
//backend
const PORT = 3000;
//adding cookie parser as middleware

app.use(express.json());

app.get('/', (req,res) => {
  res.send("hello express");
})

//api endpoints, sending response using rest principles

//GET all product
app.get('/api/products', (req,res) => {
  const products = [ //array
    {id:1, name:'Laptop', price:1000}, //object
    {id:2, name:'Phone', price:500}
  ]

  res.status(200).json({products}) //response status = request was executed successfully, and sending it in json format
})



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

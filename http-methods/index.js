//http methods = get, post, put, delete

//GET = used to fetch data from server, parameters can be passed using router parameters or query strings
//POST = used to send data to the server and create new resource, requires middleware (express.json()) to handle JSON input
import express, { response } from 'express' //after configuring package.json and adding type: "module"
import router from './route.js';

// app instance
const app = express()
 
//backend
const PORT = 3000;

//router define
//get request
app.get('/', (request, response) => { //api endpoint, use req if we want to send any data in this api, use res if want to send any data from the backend
    response.send('Hello ExpressJS2') // the '/' = represents root route, which means the response 'hello express' will appear in the root route
}) 

// app.get('/user/login', userLogin)
// app.get('/user/signup', userSignup)
app.use('/user', router) //initialize route

app.use(express.json()) //middleware will directly apply to all request/ routes, withouth explicitly putting it to the request directly

// app.post('/users', express.json() , (request,response) => { //simple post method, express.json = middleware
//     const {name, email} = request.body //destructuring
//     response.json({ //response
//         message: `User ${name} with email ${email} created successfully` 
//     })
// })

// //to try go to postman make a request use post, paste http://localhost:3000/users then create a simple object {"name": "anyname", "email": "any email"}

// app.put('/users/:id', express.json(), (req,res) => {
//     const userId = req.params.id //get user id
//     const {name, email} = req.body //get data from client
//     res.json({
//         message: `User ${userId} updated successfully to ${name}, ${email}`
//     })
// })

//post request
app.post('/users' , (req,res) => { //simple post method, express.json = middleware
    const {name, email} = req.body //destructuring
    res.json({ //response
        message: `User ${name} with email ${email} created successfully` 
    })
})

//to try go to postman make a request use post, paste http://localhost:3000/users then create a simple object {"name": "anyname", "email": "any email"}

//put request
app.put('/users/:id',  (req,res) => {
    const userId = req.params.id //get user id
    const {name, email} = req.body //get data from client
    res.json({
        message: `User ${userId} updated successfully to ${name}, ${email}`
    })
})

//delete request
app.delete('/users/:id', (req,res) => {
    const userId = req.params.id; //get user id
    res.json({
        message: `User with ID ${userId} deleted successfully`
    })
})

//to try go to postman, make a request, use put method and paste http://localhost:3000/users/uid123, then create an object {"name": "anyname", "email": "any email"}

//another route / about route
app.get('/about', (request, response) => { 
    response.send('This is about route')  //http://localhost:3000/about
}) 

//contact route
app.get('/contact', (request, response) => { 
    response.send('This is contact route')  //http://localhost:3000/contact
})

//initialize express app
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
}) //two parameter port number and callback function

//script where if we make any changes it will restart our backend
//npm i nodemon --save-dev

//with this we created a basic server

//to run it simply :
//node nameofjsfile
//node index.js
//npm start = when we configure the package.json

//to install express 
//npm init -y
//npm install express

//also remember to always go to package.json and add our file.js in the scripts with start: ""

//handling put request
//used to update an existing resource
//use route parameters (req.params) to identify the resource

//handling delete request
//used to remove a resource from the server

app.get('/things/:name/:id([0-9]{5})', (req,res) => { //multiple parameters
    const {name,id} = req.params
    res.json({
        id,
        name
    })
})

//catch-all invalid routes
//route that is called when we have no available route that is specified in the server
app.get('*', (req, res) => {
    res.send('Sorry, this is an invalid URL.');
  });
  
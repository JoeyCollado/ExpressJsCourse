import express, { response } from 'express' //after configuring package.json and adding type: "module"
import { userLogin, userSignup } from './controller.js';

// app instance
const app = express()

//backend
const PORT = 3000;

//router define
app.get('/', (request, response) => { //api endpoint, use req if we want to send any data in this api, use res if want to send any data from the backend
    response.send('Hello ExpressJS2') // the '/' = represents root route, which means the response 'hello express' will appear in the root route
}) 

app.get('/user/login', userLogin)
app.get('/user/signup', userSignup)

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
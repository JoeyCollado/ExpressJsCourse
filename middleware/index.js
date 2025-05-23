import express, { response } from 'express' //after configuring package.json and adding type: "module"


// app instance
const app = express()
 
//backend
const PORT = 3000;

app.use((req, res, next) => {
    console.log(`A new request receieved at` + Date.now())
    next(); //middleware
}) //go to localhost 3000 to check

//router define
//get request
app.get('/', (request, response) => { //api endpoint, use req if we want to send any data in this api, use res if want to send any data from the backend
    response.send('Hello ExpressJS2') // the '/' = represents root route, which means the response 'hello express' will appear in the root route
}) 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

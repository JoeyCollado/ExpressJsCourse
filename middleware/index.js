import express, { response } from 'express' //after configuring package.json and adding type: "module"
// app instance
const app = express()
//backend
const PORT = 3000;

app.get('/error', () => { //api 
    throw new Error('This is test error')
})

//handle api error to middleware
app.use((err, req, res, next) => {
    console.error(err.message)
    res.send('Internal server error')
})

// app.use((req,res, next) => {
//     console.log('Start') //1

//     res.on('finish', () => {
//         console.log('End') //3
//     })
//     next()
// })

/*
app.use('/welcome', (req, res, next) => { //application level middleware, applies to all route
    console.log(`A new request receieved at` + Date.now())
    next(); //middleware
}) //go to localhost 3000 to check
*/

//router define
//get request
app.get('/', (request, response) => { //api endpoint, use req if we want to send any data in this api, use res if want to send any data from the backend
    console.log('Middle') //2
    response.send('Hello Express') // the '/' = represents root route, which means the response 'hello express' will appear in the root route
}) 

/*
app.get('/welcome', (request, response) => { //by adding the route in the middleware,that middleware will only apply to this route
    response.send('Welcome to express app') 
}) 
*/
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

//third party middleware
//https://www.npmjs.com/ = website

//third party middlewares
//body-parser = can parse json body, pass raw body, pass url encoded form data from the body
//cookie-parser = pass the cookies on the request
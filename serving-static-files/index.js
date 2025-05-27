import express, { response } from 'express' //after configuring package.json and adding type: "module"
// app instance
const app = express()
//backend
const PORT = 3000;


app.get('/', (request, response) => { 
    response.send('Hello Express')
}) 

//get txt file from backend server
app.use('/public', express.static('public'))
app.use('/images', express.static('images')) //exposing images folder and accessing its files

//go to http://localhost:3000/example.txt to check response of file
//another example = http://localhost:3000/jek2.png for image

//after exposing as public routes
//this is how you access it http://localhost:3000/images/jek2.png


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

/*

Templating Engine in ExpressJS

A templating engine generates dynamic HTML by embedding JavaScript-like logic within an HTML file.

Key Benefits:

Keeps logic separate from presentation (HTML).

Uses variables, loops, conditionals, and functions to generate content.

In ExpressJS, templating engines are used to render views dynamically by integrating them into the application.

 */

//install package = npm install ejs
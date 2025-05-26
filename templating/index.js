import express, { response } from 'express' //after configuring package.json and adding type: "module"
// app instance
const app = express()
//backend
const PORT = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs')

app.get('/', (request, response) => { 
    const userName = 'Joey'
    response.render('index', {userName})
}) 




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
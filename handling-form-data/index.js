import express, { response } from 'express' //after configuring package.json and adding type: "module"
// app instance
const app = express()
//backend
const PORT = 3000;

app.use(express.urlencoded({extended:true}))


app.get('/', (request, response) => { 
    response.send('Hello Express')
}) 

//route
app.post('/form', (req,res) => {
    console.log(req.body)
    res.send('Form received')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})



//handling form data
//postman

//to check
//http://localhost:3000/form
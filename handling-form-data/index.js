import express, { response } from 'express' //after configuring package.json and adding type: "module"
import multer from 'multer';
// app instance
const app = express()
//backend
const PORT = 3000;
//
const upload = multer(); //instance

app.use(express.urlencoded({extended:true})) //form url encoded
//
app.use(upload.single('image')) //normal form data


app.get('/', (request, response) => { 
    response.send('Hello Express')
}) 

//route
app.post('/form', (req,res) => {
    console.log(req.body)
    console.log(req.file)
    res.send('Form received')
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})



//handling form data
//postman

//to check
//http://localhost:3000/form
//then use post method
//then send

//sending normal form data
//to use it we need external package
//npm i multer
//same process as url encoded form data

//sending file in multi-art form data

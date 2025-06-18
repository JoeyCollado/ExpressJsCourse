import express, { response } from "express"; //after configuring package.json and adding type: "module"
import { connectDB } from "./config/db.js";
import { Person } from "./models/Person.js";

// app instance
const app = express();
//backend
const PORT = 3000;
//importing mongodb connection logic
await connectDB();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//routes

//post method
app.post('/person',  async (req,res) => {
  const {email, name, age} = req.body
  const newPerson = new Person({
    name,
    age,
    email
  })
  await newPerson.save()
  console.log(newPerson)
  res.send("Person added")
})

//saving data in mongodb
app.post('/person', async (req,res) => {
  try{
    const {email, name, age} = req.body
    const newPerson = new Person({
      name,
      age,
      email
    })
    await newPerson.save()
    console.log(newPerson)
    res.send("Person added")
  }catch(error){
    res.send(error.message)
  }
})

//update method
app.put('/person',  async (req,res) => {
  const {id} = req.body
  //find data using email id
  const personData = await Person.findByIdAndUpdate(id, {age:'28'})
  
  console.log(personData)
  res.send("Person updated")
})

//saving data method

//delete method
app.delete('/person/:id', async (req,res) => {
   const {id} = req.params
   await Person.findByIdAndDelete(id)
   res.send('User Deleted')
})

//

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//mongodb
//using mongodbatlas service to create a mongodb database

//creating a schema and a model to perform crud operations in mongodb
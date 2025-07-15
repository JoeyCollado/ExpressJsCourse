import express, { response } from "express"; //after configuring package.json and adding type: "module"

// app instance
const app = express();
//backend
const PORT = 3000;
//adding cookie parser as middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello express");
});

//api endpoints, sending response using rest principles

//GET all product
app.get("/api/products", (req, res) => {
  const products = [
    //array
    { id: 1, name: "Laptop", price: 1000 }, //object
    { id: 2, name: "Phone", price: 500 },
  ];
  res.status(200).json({ products }); //response status = request was executed successfully, and sending it in json format
});

//API to get single product
app.get("/api/products/:id", (req, res) => {
  const products = [
    //array
    { id: 1, name: "Laptop", price: 1000 }, //object
    { id: 2, name: "Phone", price: 500 },
  ];
  //finding product data by id and sending it as response
  const product = products.find((p) => p.id === Number(req.params.id)); //Number converts string to number

  //conditional checking
  if (!product) {
    return res.status(404).json({ message: "Product not Found" }); //status code if data is not available
  }
  //if product is available
  res.status(200).json(product); //product is already an object so using the product name is enough for the constructor
});

//API to Create a new product
app.post('/api/products', (req,res) => {
  const newProduct = req.body
  newProduct.id = Date.now()
  res.status(201).json(newProduct)
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


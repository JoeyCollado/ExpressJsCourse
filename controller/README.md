Route in expressjs consist of:

METHOD    - HTTP method (GET, POST, PUT, DELETE) = the method
PATH      - URL route (e.g., /,users)     = url for the api
HANDLER   - Function that runs when the route is accessed

//create route
app.METHOD(PATH,HANDLER);

//get data from backend = use GET METHOD
//send data to route = use POST METHOD
//update database on backend = use PUT METHOD
//delete anything from the server = use DELETE METHOD


//Dynamic Routes

dynamic route - http://localhost:3000/user/john

used to capture dynamic values from the url
defined using: parameter_name

//Query Strings

query strings - http://localhost:3000/search?keyword=ExpressJS

used to pass optional data in the url after ?
extract using req.query
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
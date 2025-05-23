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

middleware = 
Middleware in ExpressJS

Middleware functions in ExpressJS are functions that execute before the final request handler. They can:

Modify the request (req) and response (res) objects

End the request-response cycle

Call the next middleware function in the stack

Middleware Workflow

Client Request → Middleware → Route Handler → Response to Client

Middleware is essential for logging, authentication, request parsing, error handling, etc.

//types of middleware
Types of Middleware in ExpressJS

Type	                           Description	                                    Example
Application-Level Middleware	   Applies to all routes in an app	                app.use(loggerMiddleware)
Router-Level Middleware	           Applies to specific route groups	                router.use(authMiddleware)
Built-in Middleware	               Comes with Express (e.g., express.json())	    app.use(express.json())
Third-Party Middleware	           External libraries for additional functionality	app.use(cors())
Error-Handling Middleware	       Handles errors in the request lifecycle	        app.use(errorHandler)

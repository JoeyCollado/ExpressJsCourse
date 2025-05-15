export const usernameController = (request, response) => { //http://localhost:3000/user/joey = or any other username
    //get parameter
    const username = request.params.username;

    //extract parameter from url
    //use response
    response.send(`Welcome ${username}`)
}

export const searchController = (request, response) => { // /search?keyword=express      //http://localhost:3000/search?keyword=express
    const keyword = request.query.keyword; //using this we can get the value of keyword
    response.send(`Searching for ${keyword}`) //send the response after getting the keyword
}

//here we can handle dynamic routes in separate files
//used for organizing routes logic
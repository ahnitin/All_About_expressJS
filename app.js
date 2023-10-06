//third party packages
const express = require("express");
const app = express();
//use allows us to add a new middleWare function
app.use((req,res,next)=>{
    console.log("This is the Middleware")
    next();
    // next is a function used to allow the request to move to the next middle ware.
})
app.use((req,res,next)=>{
    console.log("this is the next middle Ware");
    //.. here we are going to add a response
    res.send("<h1>Hello from express js</h1>")
})


/* const server = http.createServer(app)
server.listen(3000); 
it internally doing the same as it is in the comment section
*/
app.listen(3000);
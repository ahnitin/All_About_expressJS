const express = require("express");
const app = express();

app.use("/",(req,res,next)=>{
    console.log("this always runs");
    next();
})

app.use("/add-product",(req, res, next)=>{

    console.log("this is the next middle Ware");
    res.send("<h1>The ADD PRODUCT Page</h1>")
});

app.use("/",(req, res, next)=>{

    console.log("this is the next middle Ware");
    res.send("<h1>Hello from express js</h1>")
});

app.listen(3000); 
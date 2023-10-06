const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//before in nodejs we are using chunks and and parsing them and now it's just a 2 lines of code

app.use("/add-product",(req, res, next)=>{

    res.send('<form action="/product" method="POST"><input type="text" name ="title"><button type="submit">ADD Product</button></form>')
});

app.use("/product",(req,res,next)=>{
    console.log(req.body.title);
    res.redirect("/")
})

app.use("/",(req, res, next)=>{

    res.send("<h1>Hello from express js</h1>")
});

app.listen(3000); 
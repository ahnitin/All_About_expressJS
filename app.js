const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
//before in nodejs we are using chunks and and parsing them and now it's just a 2 lines of code

app.use("/add-product",(req, res, next)=>{

    res.send('<form action="/product" method="POST"><input type="text" name ="title"><input type="text" name="size"><button type="submit">ADD Product</button></form>')
});

app.post("/product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
})
// this post will only work when user hits on button Add product

app.use("/",(req, res, next)=>{

    res.send("<h1>Hello from express js</h1>")
});

app.listen(3000); 
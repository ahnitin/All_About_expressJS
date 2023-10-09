const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./helper/path");
// by using this we don't have to use __dirname and ../ to move to our root directory if we use this it will move to only root directry.
const express = require("express");
const app = express();
const adminroutes = require("./routes/admin");
const shoproutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin",adminroutes);
app.use(shoproutes);
app.use("/",(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})

app.listen(3000); 
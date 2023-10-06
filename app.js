const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const adminroutes = require("./routes/admin");
const shoproutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: false}));
//before in nodejs we are using chunks and and parsing them and now it's just a 2 lines of code


// this post will only work when user hits on button Add product
app.use(adminroutes);
app.use(shoproutes);
app.listen(3000); 
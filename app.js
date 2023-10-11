const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./helper/path");
// by using this we don't have to use __dirname and ../ to move to our root directory if we use this it will move to only root directry.
const express = require("express");
const app = express();
const adminroutes = require("./routes/admin");
const shoproutes = require("./routes/shop");
const contactroutes = require("./routes/contactus");
const controlerSuccess = require("./controlers/contact");
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")))
//our public css files are not accessible now we need to  so we need to be able to serve files statically 
// statically means not handled by the express router or our middleware but instead directly forwareded to the
//file system app.use is a middleware express is an object  and a static method 
app.use("/admin",adminroutes);
app.use(shoproutes);
app.use(contactroutes);
app.use("/success",controlerSuccess.contactusR);
app.use("/",(req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,"views","404.html"))
})
app.listen(3000); 
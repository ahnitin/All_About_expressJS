const rootDir = require("../helper/path");
const path = require("path");

exports.PostContactus = (req,res,next)=>{
    console.log(req.body);
    res.redirect("/success");
}

exports.getcontactus = (req,res,next)=>{
    res.sendFile(path.join(rootDir,"views","contactus.html"))
}

exports.contactusR = (req,res,next)=>{
    res.status(200).sendFile(path.join(rootDir,"views","success.html"));
}


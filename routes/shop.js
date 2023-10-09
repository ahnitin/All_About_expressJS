const path = require("path")
// as when we try to set the path by using send file it was not working because we are trying to 
// attach the file which was not accessible because it started from a root folder.
const rootDir = require("../helper/path");
const express = require("express");

const router = express.Router();

router.get("/",(req, res, next)=>{

    res.sendFile(path.join(rootDir,"views", "shop.html" ));

});

module.exports = router;
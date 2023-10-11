const rootDir = require("../helper/path");
const path = require("path");
exports.getProduct = (req, res, next)=>{

    res.sendFile(path.join(rootDir,"views","add-product.html"))
}

const express = require("express");
const path = require("path");

const rootDir = require("../helper/path");
const router = express.Router();
const controlerAddProduct = require("../controlers/product");

router.get("/add-product",controlerAddProduct.getProduct);

router.post("/add-product",(req,res,next)=>{
    console.log(req.body);
    res.redirect("/")
})

module.exports = router;
const express = require("express");
const path = require("path");
const rootDir= require("../helper/path")
const router = express.Router();
const controlerGetContactus = require("../controlers/contact");
const controlerPostContactus = require("../controlers/contact");

router.get("/contactus", controlerGetContactus.getcontactus);

router.post("/contactus",controlerPostContactus.PostContactus);

module.exports = router;
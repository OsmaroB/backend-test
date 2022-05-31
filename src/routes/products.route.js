const express = require("express");
const router = express.Router();
const { authcheck } = require("../middlewares/auth");
const product = require("../controllers/products.controller");


router.get("/", authcheck, product.read);
router.post("/add", authcheck, product.create);
router.put("/update/:id", authcheck, product.updateForId);
router.put("/delete/:id", authcheck, product.deleteForId);
router.get("/read/:id", authcheck, product.getForId);

module.exports = router;
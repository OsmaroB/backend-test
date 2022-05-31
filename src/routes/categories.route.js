const express = require("express");
const router = express.Router();
const { authcheck } = require("../middlewares/auth");
const categoy = require("../controllers/categories.controller");


router.get("/", authcheck, categoy.read);
router.post("/add", authcheck, categoy.create);
router.put("/update/:id", authcheck, categoy.updateForId);
router.get("/read/:id", authcheck, categoy.getForId);

module.exports = router;
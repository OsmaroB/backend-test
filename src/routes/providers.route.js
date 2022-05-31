const express = require("express");
const router = express.Router();
const { authcheck } = require("../middlewares/auth");
const provider = require("../controllers/providers.controller");


router.get("/", authcheck, provider.read);
router.post("/add", authcheck, provider.create);
router.put("/update/:id", authcheck, provider.updateForId);
router.put("/delete/:id", authcheck, provider.deleteForId);

module.exports = router;
//! DEPENDENCIAS IMPORTADAS --
const express = require("express");
const router = express.Router();

//! CONTROLADORES IMPORTADOS --
const { olvidePassword } = require("../controllers/auth.controllers");

router.post("/olvide-password", olvidePassword);

module.exports = router;

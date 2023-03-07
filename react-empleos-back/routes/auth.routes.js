//! DEPENDENCIAS IMPORTADAS --
const express = require("express");
const router = express.Router();

//! CONTROLADORES IMPORTADOS --
const {
  comprobarCuenta,
  olvidePassword,
  comprobarToken,
  recuperarPassword,
} = require("../controllers/auth.controllers");

router.post("/comprobar-cuenta/:token", comprobarCuenta);

router.post("/olvide-password/", olvidePassword);

router.post("/comprobar-token/:token", comprobarToken);

router.post("/recuperar-password/:token", recuperarPassword);

module.exports = router;

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

//! CONFIRMAR LA CUENTA --
router.post("/comprobar-cuenta/:token", comprobarCuenta);

//! OLVIDE EL PASSWORD --
router.post("/olvide-password/", olvidePassword);

//! ACTUALIZAR EL NUEVO PASSWORD --
router.post("/recuperar-password/:token", recuperarPassword);

//! COMPROBAR SI EL TOKEN ES VÁLIDO --
router.post("/comprobar-token/:token", comprobarToken);

//! COMPROBAR TOKEN QUE VIENE DESDE EL FRONTEND --
//TODO: AGREGAR LA RUTA, EL TOKEN VIENE DESDE EL BODY.

module.exports = router;

const express = require("express");
const router = express.Router();

//! IMPORTAR CONTROLADORES --
const {
  mostrarVacante,
  agregarVacante,
  mostrarVacantes,
} = require("../controllers/vacante.controllers");

//! REGISTRAR UNA NUEVA VACANTE --
router.post("/agregar-vacante", agregarVacante);

//! OBTENER UNA VACANTE POR SU ID --
router.get("/mostrar-vacante/:idVacante", mostrarVacante);

//! OBTENER TODAS LAS VACANTES --
router.get("/mostrar-vacantes/", mostrarVacantes);

module.exports = router;

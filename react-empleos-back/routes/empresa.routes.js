const express = require("express");
const router = express.Router();

const { registrarEmpresa } = require("../controllers/empresa.controllers");

//! REGISTRAR LOS DATOS DE LA EMPRESA --
router.post("/registrar-empresa/:idUsuario", registrarEmpresa);

//! MOSTRAR EMPRESA CON LOS DATOS DEL RECLUTADOR --

//! MOSTRAR EMPRESAS --

//! ACTUALIZAR DATOS DE UNA EMPRESA --

//! ELIMINAR EMPRESA --

module.exports = router;

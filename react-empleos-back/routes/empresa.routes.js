const express = require("express");
const router = express.Router();

const {
  registrarEmpresa,
  mostrarEmpresa,
  mostrarEmpresas,
  actualizarEmpresa,
  eliminarEmpresa,
} = require("../controllers/empresa.controllers");

//! REGISTRAR LOS DATOS DE LA EMPRESA --
router.post("/registrar-empresa/:idUsuario", registrarEmpresa);

//! MOSTRAR EMPRESA CON LOS DATOS DEL RECLUTADOR --
router.get("/mostrar-empresa/:idEmpresa", mostrarEmpresa);

//! MOSTRAR EMPRESAS --
router.get("/mostrar-empresas", mostrarEmpresas);

//! ACTUALIZAR DATOS DE UNA EMPRESA --
router.put("/actualizar-empresa/:idEmpresa&:idUsuario", actualizarEmpresa);

//! ELIMINAR EMPRESA --
router.delete("/eliminar-empresa/:idEmpresa&:idUsuario", eliminarEmpresa);

module.exports = router;

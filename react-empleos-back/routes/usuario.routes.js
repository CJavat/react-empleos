const express = require("express");
const router = express.Router();

const {
  login,
  registrarUsuario,
  subirArchivos,
  obtenerUsuarios,
  obtenerUsuario,
  editarCuenta,
  eliminarCuenta,
} = require("../controllers/usuario.controllers");

//* Validar formulario.
const { check } = require("express-validator");

//! LOGIN --
router.post("/login", login);

//! REGISTRAR UN USUARIO --
router.post(
  "/registrar-usuario",
  subirArchivos,
  [
    check("email").isEmail().withMessage("Introduce un Email Válido"),
    check("nombre")
      .not()
      .isNumeric()
      .isLength({ min: 3 })
      .withMessage("Nombre incorrecto"),
    check("apellido")
      .not()
      .isNumeric()
      .isLength({ min: 3 })
      .withMessage("Apellido incorrecto"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("El password no debe ser menor a 6 caracteres"),
    check("rol").not().isEmpty().withMessage("Selecciona un rol"),
    check("telefono")
      .isLength({ min: 10, max: 10 })
      .notEmpty()
      .withMessage("El campo es obligatorio y debe contener 10 digitos"),
    check("nacionalidad").notEmpty().withMessage("El campo es obligatorio"),
  ],
  registrarUsuario
);

//! OBTENER USUARIOS --
router.get("/mostrar-usuarios", obtenerUsuarios);

//! OBTENER USUARIO --
router.get("/mostrar-usuario/:idCuenta", obtenerUsuario);

//! EDITAR USUARIO --
router.put("/editar-cuenta/:idCuenta", subirArchivos, editarCuenta);

//! ELIMINAR CUENTA --
router.delete("/eliminar-cuenta/:idCuenta", eliminarCuenta);

//! SUBIR ARCHIVOS --
router.post("/subir-archivos", subirArchivos);

module.exports = router;

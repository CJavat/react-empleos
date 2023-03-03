const express = require("express");
const router = express.Router();
const {
  login,
  registrarUsuario,
  subirFoto,
  subirCV,
} = require("../controllers/usuario.controllers");

// Validar formulario.
const { check } = require("express-validator");

router.post("/login", login);

router.post(
  "/registrar-usuario",
  subirFoto,
  subirCV,
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
  ],
  registrarUsuario
);

//TODO: Crear un endpoint en solitario, tipo PATCH para solo actualizar la foto y otro para cv. Por si el usuario quiere subir después los archivos.

module.exports = router;

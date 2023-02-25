const express = require("express");
const router = express.Router();
const {
  login,
  registrarUsuario,
} = require("../controllers/usuario.controllers");

// Validar formulario.
const { check } = require("express-validator");

router.post("/login", login);

router.post(
  "/registrar-usuario",
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

module.exports = router;

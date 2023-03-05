const express = require("express");
const router = express.Router();

//* EXPRESS VALIDATOR.
const { body } = require("express-validator");

//! IMPORTAR CONTROLADORES --
const {
  mostrarVacante,
  agregarVacante,
  mostrarVacantes,
  actualizarVacante,
  eliminarVacante,
} = require("../controllers/vacante.controllers");

//! REGISTRAR UNA NUEVA VACANTE --
router.post(
  "/agregar-vacante",
  [
    body("nombre")
      .isString()
      .withMessage("Introduce puros letras")
      .notEmpty()
      .withMessage("El nombre de la vacante es obligatorio"),

    body("salario")
      .isNumeric()
      .withMessage("Debe ser digitos")
      .isLength({ min: 3 })
      .withMessage("Escribe solamente numeros. Mínimo 3 digítos"),

    body("diasTrabajo").isString().withMessage("Introduce puros letras"),

    body("descripcion")
      .isLength({ min: 20 })
      .withMessage("Escribe una descripción más larga"),
  ],
  agregarVacante
);

//! OBTENER UNA VACANTE POR SU ID --
router.get("/mostrar-vacante/:idVacante", mostrarVacante);

//! OBTENER TODAS LAS VACANTES --
router.get("/mostrar-vacantes/", mostrarVacantes);

//! ACTUALIZAR VACANTE POR ID --
router.put(
  "/actualizar-vacante/:idVacante",
  [
    body("nombre")
      .isString()
      .withMessage("Introduce puros letras")
      .notEmpty()
      .withMessage("El nombre de la vacante es obligatorio"),

    body("salario")
      .isNumeric()
      .withMessage("Debe ser digitos")
      .isLength({ min: 3 })
      .withMessage("Escribe solamente numeros. Mínimo 3 digítos"),

    body("diasTrabajo").isString().withMessage("Introduce puros letras"),

    body("descripcion")
      .isLength({ min: 20 })
      .withMessage("Escribe una descripción más larga"),
  ],
  actualizarVacante
);

//! ELIMINAR UNA VACANTE MEDIANTE SU ID --
router.delete("/eliminar-vacante/:idVacante", eliminarVacante);

module.exports = router;

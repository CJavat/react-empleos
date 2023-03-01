const Usuario = require("../models/Usuario.models");
const { validationResult } = require("express-validator");

// const login = async (req, res, next) => {}

const registrarUsuario = async (req, res, next) => {
  const errors = validationResult(req);

  if (req.body.password !== req.body.repassword) {
    const errorPassword = [
      ...errors.array(),
      {
        value: req.body.repassword,
        msg: "Los passwords no coinciden",
        param: "repassword",
        location: "body",
      },
    ];

    // Comprueba si el password está vacío.
    if (errorPassword.length > 0) {
      return res.status(400).json({ msg: errorPassword });
    }
  }
  // Si hay errores.
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array() });
  }

  // Verificar si el usuario esta registrado.
  const { email } = req.body;
  let agregarUsuario = await Usuario.findOne({ email });
  if (agregarUsuario) {
    return res.status(400).json({ msg: "El usuario ya está registrado." });
  }

  // Agregar el usuario a la DB.
  agregarUsuario = new Usuario(req.body);

  try {
    await agregarUsuario.save();
    res.json({ msg: "Usuario Creado Correctamente" });
  } catch (error) {
    return res.status(400).json({ msg: "Hubo un error al registrarse: " });
  }
};

module.exports = { registrarUsuario };

const Usuario = require("../models/Usuario.models");
const { check, validationResult } = require("express-validator");

// const login = async (req, res, next) => {}

const registrarUsuario = async (req, res, next) => {
  const usuario = req.body;

  // validar password con repassword.
  console.log(usuario.password === usuario.repassword);

  // const registrarUsuario = await Usuario.create(usuario);

  const errors = validationResult(req);
  // Si hay errores.
  console.log();
  if (!errors.isEmpty()) {
    return res.status(404).json({ msg: errors.array() });
  }
  res.json({ msg: usuario });
};

module.exports = { registrarUsuario };

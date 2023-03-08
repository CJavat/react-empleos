const Usuario = require("../models/Usuario.models");
const { emailOlvidePassword } = require("../config/mailtrap");
const jwt = require("jsonwebtoken");

//! OBTENER TOKEN PARA CONFIRMAR LA CUENTA --
const comprobarCuenta = async (req, res) => {
  const { token } = req.params;

  try {
    //* Buscar cuenta mediante el token.
    const usuarioEncontrado = await Usuario.findOne({ token });
    if (!usuarioEncontrado) {
      return res.status(404).json({
        message: "El usuario no existe.",
      });
    }

    //* Si el usuario existe, confirmar la cuenta.
    usuarioEncontrado.confirmado = 1;
    usuarioEncontrado.token = "";

    usuarioEncontrado.save();
    res.json({ msg: "Usuario Confirmado Exitosamente" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Ha ocurrido un error en la consulta. Intenta otra vez" });
  }
};

//! OLVIDE PASSWORD - ENVIAR EL TOKEN --
const olvidePassword = async (req, res, next) => {
  // Obtener el email.
  const emailObtenido = req.body.email;

  // comprobar que el email exista en la DB.
  const usuario = await Usuario.findOne({ email: emailObtenido });

  try {
    if (!usuario) {
      return res.status(404).json({
        message: "El usuario no existe.",
      });
    }
    const { _id, email, nombre } = usuario;

    // Generar token y guardarlo en la DB.
    const token = jwt.sign({ email, nombre }, process.env.PALABRA_SECRETA, {
      expiresIn: "1h",
    });
    await Usuario.findByIdAndUpdate({ _id }, { token }, { new: true });

    // Enviar token al email.
    emailOlvidePassword({
      email: usuario.email,
      nombre: usuario.nombre,
      token,
    });

    // Enviar respuesta exitosa
    res.json({
      msg: "Te hemos enviado un correo con las instrucciones, por favor, revisalo para poder recuperar tu contraseña.",
    });
  } catch (error) {
    return res.json({ msg: "Ha ocurrido un error, inentalo otra vez" });
  }
};

//! NUEVO PASSWORD - RECIBIR EL TOKEN Y ACTUALIZAR CONTRASEÑA --
const recuperarPassword = async (req, res, next) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    // Obtener el usuario mediante el token.
    const usuarioEncontrado = await Usuario.findOne({ token });

    if (!usuarioEncontrado) {
      return res.status(404).json({
        msg: "El usuario no existe o el token ya no es válido",
      });
    }

    // Actualizar contraseña y token del usuario.
    usuarioEncontrado.password = password;
    usuarioEncontrado.token = "";

    await usuarioEncontrado.save();

    res.json({ msg: "Contraseña Actualizada Correctamente" });
  } catch (error) {
    return res.status(400).json({ msg: "Ocurrió un error en la consulta" });
  }
};

//! COMPROBAR EL TOKEN PARA RECUPERAR EL PASSWORD --
const comprobarToken = async (req, res, next) => {
  const { token } = req.params;
  const validarToken = await Usuario.findOne({ token });

  if (!validarToken) {
    return res.json({ msg: "El token ya no es válido.", tokenValido: false });
  }

  res.json({ msg: "Token válido", tokenValido: true, token });
};

//! COMPROBAR JWT Y DEVOLVER DATOS DEL USUARIO.
const decodificarToken = async (req, res) => {
  const { token } = req.params;

  try {
    const tokenDecodificado = jwt.verify(token, process.env.PALABRA_SECRETA);
    if (!tokenDecodificado) {
      return res.status(404).json({ msg: "El token es inválido" });
    }

    const comprobarUsuario = await Usuario.findOne({
      _id: tokenDecodificado.id,
    });
    if (!comprobarUsuario) {
      return res.status(404).json({ msg: "El usuario no existe" });
    }

    res.json(comprobarUsuario);
  } catch (error) {
    res.status(400).json({ msg: "Ha ocurrido un error: " + error.message });
  }
};

module.exports = {
  comprobarCuenta,
  olvidePassword,
  recuperarPassword,
  comprobarToken,
  decodificarToken,
};

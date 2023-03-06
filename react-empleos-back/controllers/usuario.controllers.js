const Usuario = require("../models/Usuario.models");
const { comprobarCuenta } = require("../config/mailtrap");

const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require("multer");
const shortid = require("shortid");

//! MULTER - SUBIR ARCHIVOS ---------------------------------
const configuracionMulterArchivos = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, res, cb) => {
      if (req.files?.foto) {
        if (!req.files?.cv) {
          cb(null, __dirname + "/../uploads/pic");
        }
      }
      if (req.files?.cv) {
        cb(null, __dirname + "/../uploads/docs");
      }
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
  fileFilter(req, file, cb) {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Formato No Válido. Sube un archivo JPG o PNG"));
    }
  },
};

const uploadArchivos = multer(configuracionMulterArchivos).fields([
  { name: "cv", maxCount: 1 },
  { name: "foto", maxCount: 1 },
]);

const subirArchivos = (req, res, next) => {
  uploadArchivos(req, res, function (error) {
    // console.log(req);
    if (error) {
      return res.json({ msg: error });
    }

    next();
  });
};
//! -----------------------------------------------------------------

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const usuario = await Usuario.findOne({ email });

  if (!usuario) {
    return res.status(404).json({ msg: "El usuario no existe." });
  }

  // Comprobar password.
  const comprobarPassword = bcrypt.compareSync(password, usuario.password);
  if (!comprobarPassword) {
    return res.status(400).json({ msg: "El password es incorrecto." });
  }
  const { _id, nombre, apellido } = usuario;

  //* Generar el JWT.
  const token = jwt.sign(
    { id: _id.toString(), nombre, apellido },
    process.env.PALABRA_SECRETA,
    { expiresIn: "30d" }
  );

  // Si usuario y password son correctos...
  res.json({ msg: "Autenticación Exitosa", token });
};

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
    if (req.files?.foto) {
      agregarUsuario.foto = req.files.foto[0].filename;
    }

    if (req.files?.cv) {
      agregarUsuario.cv = req.files.cv[0].filename;
    }

    // Generar el token para despues guardarlo.
    const token = jwt.sign(
      { email: agregarUsuario.email, nombre: agregarUsuario.nombre },
      process.env.PALABRA_SECRETA,
      {
        expiresIn: "1h",
      }
    );
    agregarUsuario.token = token;
    await agregarUsuario.save();

    comprobarCuenta({
      email: agregarUsuario.email,
      nombre: agregarUsuario.nombre,
      token,
    });
    res.json({
      msg: "Usuario Creado Correctamente, Se envió un correo a tu email para que confirmes tu cuenta",
    });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Hubo un error al registrarse: ", error });
  }
};

const obtenerUsuarios = async (req, res) => {
  const usuarios = await Usuario.find();

  if (!usuarios) {
    return res.status(404).json({ msg: "No Hay Usuarios" });
  }

  res.json(usuarios);
};

const obtenerUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.idCuenta);

  if (!usuario) {
    return res.status(404).json({ msg: "Usuario No Encontrado" });
  }

  res.json(usuario);
};

const editarCuenta = async (req, res, next) => {
  const usuario = req.body;

  const encontrarUsuario = await Usuario.findOne(req.params);
  if (!encontrarUsuario) {
    return res.status(404).json({ msg: "El usuario no existe" });
  }

  try {
    await Usuario.findOneAndUpdate({ _id: req.params.idCuenta }, usuario, {
      new: true,
    });

    res.json({ msg: "Usuario Actualizado Correctamente" });
  } catch (error) {
    return res.status(401).json({ msg: `Ha ocurrido un error: ${error}` });
  }
};

const eliminarCuenta = async (req, res) => {
  try {
    const cuenta = await Usuario.findByIdAndDelete(req.params.idCuenta);

    if (!cuenta) {
      return res.status(404).json({ msg: "La Cuenta No Existe" });
    }

    res.json({ msg: "Cuenta Eliminada Correctamente" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: `Ha ocurrido un error al eliminar la cuenta` });
  }
};

module.exports = {
  login,
  registrarUsuario,
  subirArchivos,
  obtenerUsuarios,
  obtenerUsuario,
  editarCuenta,
  eliminarCuenta,
};

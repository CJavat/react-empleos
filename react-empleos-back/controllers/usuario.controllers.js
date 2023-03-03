const Usuario = require("../models/Usuario.models");

const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const multer = require("multer");
const shortid = require("shortid");

//* SUBIR FOTO - CONFIGURACION MULTER.
const configuracionMulterFoto = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, __dirname + "/../uploads/");
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
  fileFilter(req, file, cb) {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      cb(null, true);
    } else {
      cb(new Error("Formato No Válido. Sube un archivo JPG o PNG"));
    }
  },
};

//* SUBIR FOTO - Pasar la configuración y el campo.
//TODO: Puede ser la solución, cambiar el single por uno que acepte varios.
const uploadFoto = multer(configuracionMulterFoto).single("foto");

//* SUBIR FOTO - Subir la foto.
const subirFoto = (req, res, next) => {
  uploadFoto(req, res, function (error) {
    if (error) {
      res.json({ msg: error });
    }
    return next();
  });
};

//* SUBIR CV - Configuración Multer
const configuracionMulterCV = {
  storage: (fileStorage = multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, __dirname + "/../docs/");
    },
    filename: (req, file, cb) => {
      const extension = file.mimetype.split("/")[1];
      cb(null, `${shortid.generate()}.${extension}`);
    },
  })),
  fileFilter(req, file, cb) {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new Error("Formato No Válido. Sube un archivo PDF"));
    }
  },
};

//* SUBIR CV - Pasar la configuración y el campo.
const uploadCV = multer(configuracionMulterCV).single("cv");

//* SUBIR CV - Subir el cv.
const subirCV = (req, res, next) => {
  uploadCV(req, res, function (error) {
    if (error) {
      res.json({ msg: error });
    }
    return next();
  });
};

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

  // Si usuario y password son correctos...
  res.json({ msg: "Autenticación Exitosa" });
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
    console.log(req.file);
    return;
    //TODO: TERMINAR EL ENVIAR 2 ARCHIVOS AL MISMO TIEMPO.
    if (req.file?.filename) {
      agregarUsuario.foto = req.file.filename;
    }

    await agregarUsuario.save();
    res.json({ msg: "Usuario Creado Correctamente" });
  } catch (error) {
    return res.status(400).json({ msg: "Hubo un error al registrarse: " });
  }
};

module.exports = { login, registrarUsuario, subirFoto, subirCV };

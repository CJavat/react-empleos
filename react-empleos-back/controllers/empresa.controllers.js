const Empresa = require("../models/Empresa.models");

const registrarEmpresa = (req, res, next) => {
  const empresa = new Empresa(req.body);

  try {
    empresa.save();
    res.json({ msg: "Empresa Registrada Correctamente" });
  } catch (error) {
    return res.json({ msg: "Ocurrió un error al agregar la empresa" });
  }
};

module.exports = {
  registrarEmpresa,
};

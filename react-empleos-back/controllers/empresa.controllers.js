const Empresa = require("../models/Empresa.models");

//! REGISTRAR UNA EMPRESA --
const registrarEmpresa = async (req, res, next) => {
  const { idUsuario } = req.params;

  const esReclutador = await Empresa.findOne({
    reclutador: idUsuario,
  }).populate("reclutador");

  if (esReclutador.reclutador.rol === "Empleado") {
    return res.json({
      msg: "Los empledos no pueden registrar empresa, registrate como un Reclutador",
    });
  }

  const empresa = new Empresa(req.body);

  if (empresa.reclutador)
    try {
      empresa.save();
      res.json({ msg: "Empresa Registrada Correctamente" });
    } catch (error) {
      return res.json({ msg: "Ocurrió un error al agregar la empresa" });
    }
};

//! MOSTRAR UNA EMPRESA POR SU ID --
const mostrarEmpresa = async (req, res, next) => {
  //* Obtener el id del usuario --
  const { idEmpresa } = req.params;
  const empresaEncontrada = await Empresa.findOne({
    reclutador: idEmpresa,
  }).populate("reclutador");

  if (!empresaEncontrada) {
    return res.json({ msg: "No se ha encontrado la empresa" });
  }

  res.json(empresaEncontrada);

  console.log(empresaEncontrada);
};

//! MOSTRAR TODAS LAS EMPRESAS --
const mostrarEmpresas = async (req, res, next) => {
  const empresas = await Empresa.find().select("-__v");
  if (!empresas) {
    return res.json({ msg: "No hay empresas registradas" });
  }

  res.json(empresas);
};

//! ACTUALIZAR DATOS DE LA EMPRESA MEDIANTE UN ID --
const actualizarEmpresa = async (req, res, next) => {};

//! ELIMINAR EMPRESA MEDIANTE UN ID --
const eliminarEmpresa = async (req, res, next) => {};

//! EXPORTAR CONTROLADORES --
module.exports = {
  registrarEmpresa,
  mostrarEmpresa,
  mostrarEmpresas,
  actualizarEmpresa,
  eliminarEmpresa,
};

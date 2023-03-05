const Empresa = require("../models/Empresa.models");
const Usuario = require("../models/Usuario.models");

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
    _id: idEmpresa,
  }).populate("reclutador");

  if (!empresaEncontrada) {
    return res.json({ msg: "No se ha encontrado la empresa" });
  }

  res.json(empresaEncontrada);
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
const actualizarEmpresa = async (req, res, next) => {
  const { idEmpresa, idUsuario } = req.params;
  const datosActualizados = req.body;

  //TODO: PEDIR EL ID DEL USUARIO Y EMPRESA Y SOLO MOSTRAR LA EMPRESA SI EL USUARIO ES EL DUEÑO.

  try {
    const usuarioEncontrado = await Usuario.findById({ _id: idUsuario });
    if (!usuarioEncontrado) {
      return res.json({ msg: "No se ha encontrado el usuario" });
    }

    const empresaEncontrada = await Empresa.findOne({
      _id: idEmpresa,
      reclutador: idUsuario,
    });

    if (!empresaEncontrada) {
      return res.json({ msg: "No se ha encontrado la empresa" });
    }

    await Empresa.findByIdAndUpdate(
      { _id: idEmpresa, reclutador: idUsuario },
      datosActualizados,
      { new: true }
    );

    res.json({ msg: "Datos Actualizados Correctamente" });
  } catch (error) {
    return res.json({ msg: "Ha ocurrido un error en la consulta." });
  }
};

//! ELIMINAR EMPRESA MEDIANTE UN ID --
const eliminarEmpresa = async (req, res, next) => {
  const { idEmpresa, idUsuario } = req.params;

  const usuarioEncontrado = await Usuario.findById({ _id: idUsuario });
  if (!usuarioEncontrado) {
    return res.json({ msg: "No se ha encontrado el usuario" });
  }

  const empresaEncontrada = await Empresa.findOne({
    _id: idEmpresa,
    reclutador: idUsuario,
  });

  if (!empresaEncontrada) {
    return res.json({ msg: "No se ha encontrado la empresa" });
  }

  await Empresa.findByIdAndDelete({ _id: idEmpresa });

  res.json({ msg: "Empresa Eliminada Correctamente" });
};

//! EXPORTAR CONTROLADORES --
module.exports = {
  registrarEmpresa,
  mostrarEmpresa,
  mostrarEmpresas,
  actualizarEmpresa,
  eliminarEmpresa,
};

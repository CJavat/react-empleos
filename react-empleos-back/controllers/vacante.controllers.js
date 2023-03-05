//! IMPORTAR DEPENDENCIAS --
const Vacante = require("../models/Vacante.models");

//* Validar formulario.
const { validationResult } = require("express-validator");

//! AGREGAR UNA VACANTE A LA DB --
const agregarVacante = async (req, res, next) => {
  const vacante = new Vacante(req.body);

  const errors = validationResult(req);

  console.log(errors.errors);
  // Si hay errores.
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array() });
  }

  try {
    await vacante.save();
    return res.json({ msg: "La vacante se ha guardado correctamente" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Ha ocurrido un error al guardar la vacante." });
  }
};

//! MOSTRAR UNA VACANTE MEDIANTE SU ID.
const mostrarVacante = async (req, res, next) => {
  const { idVacante } = req.params;
  const vacanteEncontrada = await Vacante.findById({ _id: idVacante }).populate(
    "empresa"
  );

  if (!vacanteEncontrada) {
    return res.status(404).json({ msg: "La vacante no existe" });
  }

  res.json(vacanteEncontrada);
};

//! MOSTRAR TODAS LAS VACANTES QUE HAY EN LA DB --
const mostrarVacantes = async (req, res, next) => {
  const vacantes = await Vacante.find();

  if (!vacantes) {
    return res.status(404).json({ msg: "No hay ninguna vacante" });
  }

  res.json(vacantes);
};

//! ACTUALIZAR LA VACANTE MEDIANTE SU ID --
const actualizarVacante = async (req, res, next) => {
  const { idVacante } = req.params;
  const actualizarVacante = req.body;

  const errors = validationResult(req);

  // Si hay errores.
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: errors.array() });
  }

  try {
    const vacanteEncontrada = await Vacante.findById({ _id: idVacante });
    if (!vacanteEncontrada) {
      return res.status(404).json({ msg: "No se encontro ninguna vacante" });
    }

    await Vacante.findByIdAndUpdate({ _id: idVacante }, actualizarVacante, {
      new: true,
    });

    res.status(200).json({ msg: "Vacante Actualizada Correctamente" });
  } catch (error) {
    return res.status(400).json({ msg: "Ocurrió un error, intenta otra vez" });
  }
};

const eliminarVacante = async (req, res, next) => {
  const { idVacante } = req.params;
  try {
    const vacanteEncontrada = await Vacante.findById({ _id: idVacante });
    if (!vacanteEncontrada) {
      return res.status(404).json({ msg: "La Vacante No Existe" });
    }

    await Vacante.findByIdAndDelete({ _id: idVacante });

    res.json({ msg: "Vacante Eliminada Correctamente" });
  } catch (error) {
    return res
      .status(400)
      .json({ msg: "Ocurrio un error. Intentalo de nuevo" });
  }
};

//! EXPORTAR CONTROLADORES.
module.exports = {
  agregarVacante,
  mostrarVacante,
  mostrarVacantes,
  actualizarVacante,
  eliminarVacante,
};

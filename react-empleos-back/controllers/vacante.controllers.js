//! IMPORTAR DEPENDENCIAS --
const Vacante = require("../models/Vacante.models");

//TODO: HACER UNA FUNCION PARA VALIDAR LOS DATOS DE LA VACANTE.

//! AGREGAR UNA VACANTE A LA DB --
const agregarVacante = async (req, res, next) => {
  const vacante = new Vacante(req.body);

  try {
    await vacante.save();
    return res.json({ msg: "La vacante se ha guardado correctamente" });
  } catch (error) {
    return res.json({ msg: "Ha ocurrido un error al guardar la vacante." });
  }
};

//! MOSTRAR UNA VACANTE MEDIANTE SU ID.
const mostrarVacante = async (req, res, next) => {
  //TODO: TERMINAR ESTE CONTROLADOR.
  console.log("Desde mostrar-vacante");
};

//! MOSTRAR TODAS LAS VACANTES QUE HAY EN LA DB --
const mostrarVacantes = async (req, res, next) => {
  //TODO: TERMIANR ESTE CONTROLADOR.
};

//TODO: FALTA ACTUALIZAR Y ELIMINAR VACANTES.

//! EXPORTAR CONTROLADORES.
module.exports = {
  agregarVacante,
  mostrarVacante,
  mostrarVacantes,
};

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

//TODO: FALTA HACER ESTA PÁGINA.. //
const Postulaciones = () => {
  //* OBTENER ID DE LA VACANTE.
  const { id } = useParams();

  const { usuarioLogeado, cargando, setCargando } = useAuth();

  useEffect(() => {
    // console.log(usuarioLogeado);
  }, []);

  return <div>Postulaciones</div>;
};

export default Postulaciones;

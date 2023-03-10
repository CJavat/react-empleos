import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Forbidden from "../components/Forbidden";
import clienteAxios from "../helpers/configAxios";
import useAuth from "../hooks/useAuth";

const EditarVacante = () => {
  //* Obtener variables del provider.
  const { cargando, setCargando, usuarioLogeado } = useAuth();

  const { id } = useParams();

  const [datosVacante, setDatosVacante] = useState({});
  const [esEditable, setEsEditable] = useState(false);

  useEffect(() => {
    setCargando(true);
    try {
      const obtenerVacante = async () => {
        const respuesta = await clienteAxios.get(
          `/vacantes/mostrar-vacante/${id}`
        );
        setDatosVacante(respuesta.data);

        if (respuesta.data.empresa.reclutador._id == usuarioLogeado._id) {
          console.log(esEditable);
          setEsEditable(true);
        } else {
          setEsEditable(false);
        }
      };
      obtenerVacante();
    } catch (error) {
      console.log(error);
    }

    setCargando(false);
  }, []);

  {
    //TODO: FALTA HACER ESTA PARTE. ES IGUAL QUE "EDITAR EMPRESA" SE HACE IGUAL
    return esEditable ? <div>EditarVacante</div> : <Forbidden alerta={false} />;
  }
};

export default EditarVacante;

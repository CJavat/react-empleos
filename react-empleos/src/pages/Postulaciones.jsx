import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import clienteAxios from "../helpers/configAxios";

import Forbidden from "../components/Forbidden";
import Spinner from "../components/Spinner";

//TODO: FALTA HACER ESTA PÁGINA.. //
const Postulaciones = () => {
  //* OBTENER ID DE LA VACANTE.
  const { id } = useParams();

  const { usuarioLogeado, cargando, setCargando } = useAuth();

  const [datosVacante, setDatosVacante] = useState({});
  const [miVacante, setMiVacante] = useState(false);

  useEffect(() => {
    setCargando(true);
    try {
      const obtenerVacante = async () => {
        const respuesta = await clienteAxios.get(
          `vacantes/mostrar-vacante/${id}`
        );
        setDatosVacante(respuesta.data);
      };
      obtenerVacante();

      console.log(datosVacante.empresa.reclutador._id);
      console.log(usuarioLogeado._id);
      if (usuarioLogeado?._id === datosVacante.empresa?.reclutador?._id)
        setMiVacante(true);
      else setMiVacante(false);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  }, [datosVacante?.empresa?.reclutador?._id]);

  console.log();

  {
    return cargando ? (
      <Spinner />
    ) : miVacante ? (
      <div>
        <p className="flex justify-center items-end gap-2 text-center movilS:text-2xl movilL:text-3xl tablet:text-6xl desktopL:text-5xl">
          Usuarios
          <span className="text-blue-600 font-bold movilS:text-4xl tablet:text-7xl desktopL:text-9xl">
            Postulados
          </span>
        </p>

        {/* //TODO: MOSTRAR LOS USUARIOS QUE SE HAN POSTULADO */}
      </div>
    ) : (
      <Forbidden />
    );
  }
};

export default Postulaciones;

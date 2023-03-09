import { useEffect, useState } from "react";
import Vacantes from "../components/Vacantes";
import clienteAxios from "../helpers/configAxios";
import useAuth from "../hooks/useAuth";

const Inicio = () => {
  const { usuarioLogeado } = useAuth();

  const [vacantes, setVacantes] = useState([]);

  useEffect(() => {
    // console.log(usuarioLogeado);

    try {
      const obtenerVacantes = async () => {
        const respuesta = await clienteAxios.get("/vacantes/mostrar-vacantes");
        setVacantes(respuesta.data);
      };
      obtenerVacantes();
    } catch (error) {
      console.log(error);
    }
    // console.log(vacantes);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      {/* //TODO: EMPEZAR A HACER ESTE LAYOUT */}
      <p className="flex flex-col text-center movilS:text-sm movilL:text-lg tablet:text-3xl desktopL:text-5xl">
        <span className="text-blue-600 font-bold movilS:text-4xl tablet:text-6xl desktopL:text-9xl">
          VACANTES
        </span>
      </p>
      {/* MOSTRAR TODOS LOS EMPLEOS */}
      {vacantes.map((vacante) => (
        <Vacantes key={vacante._id} vacante={vacante} />
      ))}
    </div>
  );
};

export default Inicio;

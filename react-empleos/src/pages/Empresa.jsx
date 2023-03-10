import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import clienteAxios from "../helpers/configAxios";
import useAuth from "../hooks/useAuth";

import logoEstatico from "../../public/github-logo.png";

const Empresa = () => {
  const { cargando, setCargando, usuarioLogeado } = useAuth();
  const [empresa, setEmpresa] = useState({});
  const [miEmpresa, setMiEmpresa] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    try {
      const mostrarEmpresa = async () => {
        const respuesta = await clienteAxios.get(
          `/empresa/mostrar-empresa/${id}`
        );
        setEmpresa(respuesta?.data);
        setMiEmpresa(respuesta.data?.reclutador._id === usuarioLogeado._id);
        console.log(respuesta?.data);
        console.log(usuarioLogeado);
        console.log(respuesta?.data.reclutador._id === usuarioLogeado._id);
      };
      mostrarEmpresa();
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  }, []);

  {
    return cargando ? (
      <Spinner />
    ) : (
      <div className="flex items-start gap-6 movilS:flex-col-reverse tablet:flex-row tablet:mt-14 tablet:mb-72 desktopL:mt-14 desktop:h-96 desktopL:h-96">
        <div className="w-full">
          <h2 className="text-center text-4xl">
            {empresa.empresa}{" "}
            {miEmpresa ? (
              <span className="bg-indigo-500 ml-3 mt-1 text-xs font-bold rounded-xl px-2 py-1 absolute">
                Propietario
              </span>
            ) : null}
          </h2>
          <p className="">{empresa?.pais}</p>
          <p className="">{empresa?.estado}</p>
          <p className="">{empresa?.ubicacion}</p>
          <p className="">{empresa?.reclutador?.nombre}</p>
          <p className="">{empresa?.reclutador?.email}</p>
          <p className="">{empresa?.reclutador?.telefono}</p>
          <p className=""></p>
        </div>

        <div className="flex flex-col justify-center items-center w-full tablet:justify-end ">
          <img
            src={logoEstatico}
            alt="logo estatico"
            className="border-2 border-blue-600 w-4/6 rounded-lg object-contain"
          />
          {empresa.urlEmpresa ? (
            <p className="my-5 font-bold text-lg text-center">
              Visitanos en:{" "}
              <span className="text-blue-600">{empresa.urlEmpresa}</span>
            </p>
          ) : (
            <p className="">La URL de la página no existe</p>
          )}
        </div>
      </div>
    );
  }
};

export default Empresa;

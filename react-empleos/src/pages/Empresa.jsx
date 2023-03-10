import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import clienteAxios from "../helpers/configAxios";
import useAuth from "../hooks/useAuth";

import logoEstatico from "../assets/github-logo.png";

const Empresa = () => {
  const { cargando, setCargando, usuarioLogeado } = useAuth();

  const [empresa, setEmpresa] = useState({});
  const [miEmpresa, setMiEmpresa] = useState(false);
  const [rutaLogo, setRutaLogo] = useState("");
  const [hayLogo, setHayLogo] = useState(false);

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
        setRutaLogo(`http://localhost:5000/${respuesta.data.logoEmpresa}`);
        if (respuesta.data.logoEmpresa?.length === 0) {
          setHayLogo(false);
        } else {
          setHayLogo(true);
        }
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
      <div className="flex flex-col justify-center items-center">
        <h2 className="flex flex-col items-center text-center movilS:text-3xl tablet:text-6xl my-2 font-bold text-blue-600">
          {miEmpresa ? (
            <span className="bg-indigo-500 text-white ml-3 mt-1 top-0 text-xs font-bold rounded-xl px-2 py-1 uppercase">
              Propietario
            </span>
          ) : null}
          {empresa.empresa}
        </h2>
        <div className="flex items-center gap-6 movilS:flex-col-reverse tablet:flex-row tablet:mt-14 ">
          <div className="w-full flex flex-col">
            <div className="flex flex-col  tablet:items-start tablet:pl-9 gap-3 text-2xl mb-5 px-3">
              <h3 className="font-bold text-blue-700 text-3xl">UBICACIÓN:</h3>
              <p>
                País:{" "}
                <span className="text-gray-600 font-bold capitalize">
                  {empresa?.pais}
                </span>
              </p>
              <p>
                Estado:{" "}
                <span className="text-gray-600 font-bold capitalize">
                  {empresa?.estado}
                </span>
              </p>
              <p>
                Dirección:{" "}
                {empresa?.ubicacion?.length > 0 ? (
                  <span className="text-gray-600 font-bold capitalize">
                    {empresa?.ubicacion}
                  </span>
                ) : (
                  <span className="text-red-600">No Especificado</span>
                )}
              </p>

              <h3 className="font-bold text-blue-700 text-3xl mt-5">
                CONTACTO:
              </h3>
              <p>
                Nombre del reclutador:{" "}
                <Link
                  to={`/usuario/perfil/${empresa?.reclutador?._id}`}
                  className="text-gray-600 font-bold capitalize hover:text-blue-700"
                >
                  {empresa?.reclutador?.nombre}
                </Link>
              </p>
              <p>
                Email:{" "}
                <span className="text-gray-600 font-bold">
                  {empresa?.reclutador?.email}
                </span>
              </p>
              <p>
                Teléfono:{" "}
                <span className="text-gray-600 font-bold">
                  {empresa?.reclutador?.telefono}
                </span>
              </p>
            </div>

            {miEmpresa ? (
              <Link
                to={`/empresa/editar/${empresa._id}`}
                className="self-center border-2 rounded-2xl w-fit mt-3 py-2 px-4 font-bold border-blue-700 bg-blue-600 hover:text-blue-600 hover:border-gray-700 hover:bg-white"
              >
                Editar Mi Empresa
              </Link>
            ) : null}
          </div>

          <div className="flex flex-col justify-center items-center w-full tablet:justify-end">
            {/* //TODO: COMPROBAR FOTO, SI NO HAY, PONER "NO HAY FOTO DISPONIBLE" DENTRO DEL CUADRO */}

            {hayLogo ? (
              <img
                src={rutaLogo}
                alt="logo estatico"
                className="border-2 border-blue-600 w-4/6 rounded-lg object-contain"
              />
            ) : (
              <p className="text-red-600 border-blue-600 border-2 w-4/6 px-7 py-7 rounded-lg">
                NO HAY UN LOGO DISPONIBLE
              </p>
            )}

            {empresa.urlEmpresa ? (
              <p className="my-5 font-bold text-lg text-center">
                Visitanos en:{" "}
                <span className="text-blue-600">{empresa.urlEmpresa}</span>
              </p>
            ) : (
              <p className="text-red-600">La URL de la página no existe</p>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Empresa;

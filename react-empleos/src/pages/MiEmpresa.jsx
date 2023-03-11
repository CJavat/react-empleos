import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MiEmpresa = () => {
  const { usuarioLogeado, cargando, obtenerEmpresas, setCargando } = useAuth();

  useEffect(() => {
    //TODO: Pensar una forma para solucionar esto. LA EMPRESA NO SE GUARDA BIEN EN EL OBJETO DE USUARIO LOGEADO, GUARDARLO EN UN TOKEN NUEVO DE LOCAL STORAGE.
    obtenerEmpresas();
  });

  const { miEmpresa } = usuarioLogeado;
  const [empresa] = miEmpresa;
  console.log(empresa);
  {
    return (
      <div className="flex flex-col justify-center items-center gap-3">
        <p className="flex justify-center items-end gap-2 text-center movilS:text-2xl movilL:text-3xl tablet:text-6xl desktopL:text-5xl">
          Mi
          <span className="text-blue-600 font-bold movilS:text-4xl tablet:text-7xl desktopL:text-9xl">
            Empresa
          </span>
        </p>

        <h2 className="flex flex-col items-center text-center movilS:text-3xl tablet:text-6xl my-2 font-bold text-indigo-600">
          {empresa?.empresa}
        </h2>
        <div className="flex items-center gap-6 movilS:flex-col-reverse tablet:flex-row tablet:mt-14 ">
          <div className="w-5/6 flex flex-col">
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
                {empresa?.ubicacion.length > 0 ? (
                  <span className="text-gray-600 font-bold capitalize">
                    {empresa?.ubicacion}
                  </span>
                ) : (
                  <span className="text-red-600">No Especificado</span>
                )}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-full tablet:justify-end">
            {/* {logoEmpresa ? (
            <img
              src={`http://localhost:5000/${logoEmpresa}`}
              alt={`Logo - ${logoEmpresa}`}
              className="border-2 border-blue-600 rounded-lg object-contain movilS:w-44 movilL:w-56 laptop:w-72 desktop:w-80 desktopL:w-96 movilS:h-44 movilL:h-56 laptop:h-72 desktop:h-80 desktopL:h-96"
            />
          ) : (
            <p className="flex justify-center items-center font-bold text-red-600 border-blue-600 border-2 px-7 py-7 rounded-lg movilS:w-44 movilL:w-56 laptop:w-72 desktop:w-80 desktopL:w-96 movilS:h-44 movilL:h-56 laptop:h-72 desktop:h-80 desktopL:h-96">
              NO HAY UN LOGO DISPONIBLE
            </p>
          )} */}

            {/* {urlEmpresa ? (
            <p className="my-5 font-bold text-lg text-center">
              Visitanos en:{" "}
              <span className="block text-blue-600">{empresa.urlEmpresa}</span>
            </p>
          ) : (
            <p className="text-red-600">La URL de la página no existe</p>
          )} */}
          </div>
        </div>
        <div className="w-full px-7 flex justify-center items-center gap-2 movilS:flex-col tablet:flex-row">
          {/* <Link
          to={`/empresa/${_id}`}
          className="uppercase border-2 rounded-2xl mt-3 py-2 px-4 font-bold text-center movilS:w-full tablet:w-fit border-blue-700 bg-blue-600 hover:text-blue-600 hover:border-gray-700 hover:bg-white"
        >
          Ver Empresa
        </Link>

        {esMiEmpresa ? (
          <Link
            to={`/empresa/editar/${empresa._id}`}
            className="uppercase border-2 rounded-2xl mt-3 py-2 px-4 font-bold text-center movilS:w-full tablet:w-fit border-indigo-500 bg-indigo-500 text-white hover:text-indigo-600 hover:border-white hover:bg-white"
          >
            Editar Mi Empresa
          </Link>
        ) : null} */}
        </div>
      </div>
    );
  }
};

export default MiEmpresa;
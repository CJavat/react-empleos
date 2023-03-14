import { useEffect, useState } from "react";
import clienteAxios from "../helpers/configAxios";
import { Link } from "react-router-dom";

const UsuariosPostulados = ({ usuario, nombreVacante }) => {
  const [datosUsuario, setDatosUsuario] = useState({});

  useEffect(() => {
    const obtenerUsuario = async () => {
      const respuesta = await clienteAxios.get(
        `/usuarios/mostrar-usuario/${usuario}`
      );
      setDatosUsuario(respuesta.data);
    };
    obtenerUsuario();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-11/12 laptop:w-9/12 desktop:w-8/12">
      <div className="flex movilS:flex-col-reverse tablet:flex-row movilS:items-center tablet:justify-between border-2 border-blue-600 rounded-md gap-7 py-5 px-3 w-full">
        <div className="w-full flex flex-col movilS:self-start tablet:self-center uppercase font-bold">
          <p className="flex gap-2">
            Nombre:{" "}
            <span className="text-blue-600">{datosUsuario?.nombre}</span>
          </p>
          <p className="flex gap-2">
            Teléfono:{" "}
            {datosUsuario?.telefono ? (
              <span className=" text-blue-600">{datosUsuario?.telefono}</span>
            ) : (
              <span className=" text-red-400 uppercase">Sin Teléfono</span>
            )}
          </p>
          <p className="flex gap-2">
            Rol: <span className=" text-blue-600">{datosUsuario?.rol}</span>
          </p>

          <p className="flex gap-2">
            Email:
            <span className="text-blue-600">{datosUsuario?.email}</span>
          </p>

          <p className="flex items-center mt-1 gap-2">
            {
              <>
                {datosUsuario?.cv ? (
                  <>
                    CV:{" "}
                    <a
                      href={`http://localhost:5000/${datosUsuario?.cv}`}
                      target="_blank"
                      className="font-bold py-2 px-3 border-2 rounded-lg border-none bg-indigo-600 text-white hover:text-indigo-600 hover:bg-white"
                    >
                      Ver CV
                    </a>
                  </>
                ) : (
                  <>
                    CV:{" "}
                    <span className="font-bold text-gray-600">
                      No tiene un CV guardado
                    </span>
                  </>
                )}
              </>
            }
          </p>

          <Link
            to={`/enviar-mensaje/${datosUsuario._id}`}
            className="uppercase text-center border-2 rounded-2xl self-center w-fit mt-3 py-2 px-4 font-bold border-blue-700 bg-blue-600 hover:text-blue-600 hover:border-blue-600 hover:bg-white"
          >
            Enviar Un Mensaje
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center w-full">
          {datosUsuario?.foto ? (
            <img
              src={`http://localhost:5000/${datosUsuario?.foto}`}
              alt={`Logo - ${datosUsuario?.foto}`}
              className=" border-2 border-blue-600 rounded-lg object-cover movilS:w-44 movilL:w-56 tablet:w-96 desktopL:w-96 movilS:h-44 movilL:h-56 tablet:h-96 desktopL:h-96 "
            />
          ) : (
            <p className="flex justify-center items-center font-bold text-center text-red-600 border-blue-600 border-2 px-7 py-7 rounded-lg movilS:w-44 movilL:w-56 laptop:w-72 desktop:w-80 desktopL:w-96 movilS:h-44 movilL:h-56 laptop:h-72 desktop:h-80 desktopL:h-96">
              <span className="block bg-red-300 rounded-lg px-3 py-2">
                NO HAY UN FOTO DISPONIBLE
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsuariosPostulados;

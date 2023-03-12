import { useEffect, useState } from "react";
import clienteAxios from "../helpers/configAxios";
import useAuth from "../hooks/useAuth";
import Iframe from "react-iframe";
import Spinner from "../components/Spinner";

const MiPerfil = () => {
  const { cargando, usuarioLogeado, setCargando } = useAuth();

  const [miUsuario, setMiUsuario] = useState({});

  useEffect(() => {
    console.log(usuarioLogeado._id);

    try {
      setCargando(true);
      const obtenerMiPerfil = async () => {
        const respuesta = await clienteAxios.get(
          `/usuarios/mostrar-usuario/${usuarioLogeado._id}`
        );
        setMiUsuario(await respuesta.data);
        console.log(await miUsuario);
      };
      obtenerMiPerfil();
    } catch (error) {}
    setCargando(false);
  }, []);

  return cargando ? (
    <Spinner />
  ) : (
    <div className="flex flex-col justify-center items-center gap-3 w-11/12 laptop:w-9/12 desktop:w-8/12">
      <p className="flex justify-center items-end gap-1 text-center movilS:text-2xl movilL:text-3xl tablet:text-6xl desktopL:text-5xl">
        Mi
        <span className="text-blue-600 font-bold movilS:text-4xl tablet:text-7xl desktopL:text-9xl">
          Perfil
        </span>
      </p>

      <div className="flex movilS:flex-col-reverse tablet:flex-row movilS:items-center tablet:justify-between border-2 border-blue-600 rounded-md gap-7 py-5 px-3 w-full">
        <div className="w-full flex flex-col movilS:self-start tablet:self-center uppercase font-bold">
          <p className="flex gap-2">
            Nombre: <span className="text-blue-600">{miUsuario?.nombre}</span>
          </p>
          <p className="flex gap-2">
            Teléfono:{" "}
            <span className=" text-blue-600">{miUsuario?.telefono}</span>
          </p>
          <p className="flex gap-2">
            Rol: <span className=" text-blue-600">{miUsuario?.rol}</span>
          </p>
          <p className="flex gap-2">
            Nacionalidad:
            <span className="text-blue-600">{miUsuario?.nacionalidad}</span>
          </p>

          <p className="flex gap-2">
            Email:
            <span className="text-blue-600">{miUsuario?.email}</span>
          </p>

          <p className="flex items-center mt-1 gap-2">
            CV:{" "}
            <a
              href={`http://localhost:5000/${miUsuario?.cv}`}
              target="_blank"
              className="font-bold py-2 px-3 border-2 rounded-lg border-none bg-indigo-600 text-white hover:text-indigo-600 hover:bg-white"
            >
              Ver Mi CV
            </a>
          </p>

          {/* //TODO: ES UN LINK, MANDARLO A LA PAGINA DE EDICION DE USUARIO */}
          <button className="uppercase border-2 flex-1 rounded-lg mt-7 py-2 px-3 border-none bg-blue-700 text-white hover:text-blue-700 hover:bg-white">
            Editar Perfil
          </button>
        </div>

        <div className="flex flex-col justify-center items-center movilS:w-44 movilL:w-56 tablet:w-96 desktopL:w-96 movilS:h-44 movilL:h-56 tablet:h-96 desktopL:h-96 ">
          {miUsuario?.foto ? (
            <img
              src={`http://localhost:5000/${miUsuario?.foto}`}
              alt={`Logo - ${miUsuario?.foto}`}
              className="border-2 border-blue-600 rounded-lg object-contain"
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

export default MiPerfil;

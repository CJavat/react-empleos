import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full py-2 px-16 text-center flex justify-end items-center gap-4 bg-blue-600 font-bold movilS:px-5 movilS:justify-evenly movilS:flex-wrap movilS:gap-1">
      <Link
        to="/crear-vacante"
        className="border-2 flex-1 rounded-lg py-2 px-3 border-none bg-blue-700 text-white hover:text-blue-700 hover:bg-white"
      >
        Crear Vacante
      </Link>
      <Link
        to="/ver-vacantes"
        className="border-2 flex-1 rounded-lg py-2 px-3 border-none bg-blue-700 text-white hover:text-blue-700 hover:bg-white"
      >
        Ver Vacantes
      </Link>
      <Link
        to="/ver-empresas"
        className="border-2 flex-1 rounded-lg py-2 px-3 border-none bg-blue-700 text-white hover:text-blue-700 hover:bg-white"
      >
        Ver Empresas
      </Link>
      <Link
        //TODO: URL DINAMICA, ENVIAR A "MI PERFIL" SI ES EMPLEADO Y "MI EMPRESA" SI ES RECLUTADOR.
        to="/mi-empresa"
        className="border-2 flex-1 rounded-lg py-2 px-3 border-none bg-blue-700 text-white hover:text-blue-700 hover:bg-white"
      >
        {/* //TODO: TEXTO DINAMICO, MOSTRAR "MI PERFIL" SI ES EMPLEADO Y "MI EMPRESA" SI ES RECLUTADOR */}
        Mi Empresa
      </Link>
      <Link
        to="/mensajes"
        className="border-2 flex-1 rounded-lg py-2 px-3 border-none bg-blue-700 text-white hover:text-blue-700 hover:bg-white"
      >
        Mensajes
      </Link>
    </div>
  );
};

export default Sidebar;

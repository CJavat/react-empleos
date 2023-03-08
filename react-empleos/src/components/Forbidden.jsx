import { Link } from "react-router-dom";

const Forbidden = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center font-bold text-center">
      <p className="w-full text-blue-700 bg-yellow-400 font-bold text-center movilS:text-lg movilL:text-lg desktopL:text-5xl rounded-xl mt-2">
        ¡Atención! - Primero debes confirmar tu cuenta, y si eres reclutador,
        debes tener 1 empresa creada.
      </p>

      <h1 className="text-blue-600 text-7xl">ERROR 403</h1>
      <h2 className="text-white text-5xl">PAGINA PROHIBIDA</h2>

      <Link
        to="/auth/iniciar-sesion"
        className="text-white border-blue-700 font-bold border-2 mt-28 px-7 py-1 self-center rounded-lg "
      >
        INICIAR SESIÓN
      </Link>
    </div>
  );
};

export default Forbidden;

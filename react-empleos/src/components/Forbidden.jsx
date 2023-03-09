import { Link } from "react-router-dom";

const Forbidden = () => {
  return (
    <div className="h-screen w-full gap-4 flex flex-col justify-center items-center font-bold text-center">
      <p className="w-5/6 text-blue-700 bg-yellow-400 font-bold text-center movilS:text-lg movilL:text-lg desktopL:text-5xl rounded-xl mt-2">
        ¡Atención! - Primero debes confirmar tu cuenta, y si eres reclutador,
        debes tener 1 empresa creada.
      </p>

      <h1 className="text-blue-600 movilS:text-4xl tablet:text-7xl laptop:text-8xl desktopL:text-9xl">
        ERROR 403 - NO AUTORIZADO
      </h1>
      <h2 className="text-white movilS:text-2xl desktop:text-4xl desktopL:text-6xl">
        NO TIENES ACCESO PARA ENTRAR A ÉSTA PÁGINA
      </h2>

      <Link
        to="/auth/iniciar-sesion"
        className="cursor-pointer bg-white text-blue-600 border-2 rounded-lg font-bold px-7 py-1 movilS:w-11/12 tablet:w-7/12 movilS:text-lg tablet:text-2xl desktopL:text-4xl desktopL:desktopL:mt-7"
      >
        INICIAR SESIÓN
      </Link>
    </div>
  );
};

export default Forbidden;

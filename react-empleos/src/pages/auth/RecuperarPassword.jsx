import React from "react";
import { Link } from "react-router-dom";

const RecuperarPassword = () => {
  return (
    <>
      <p className="text-center text-xl sm:text-2xl mt-2 px-2 flex flex-col ">
        <span className="text-blue-600 font-bold text-5xl">
          Recuperar Cuenta
        </span>
        Nunca perderas tu contraseña
      </p>

      <form className="flex flex-col items-center mt-6 gap-5 mb-7 text-lg">
        {/* //TODO: FORMULARIO PARA RECUPERAR LA CONTRASEÑA. */}
      </form>

      <div className="flex text-center my-6 w-full justify-around">
        <Link to="/auth/iniciar-sesion">
          <p>
            Iniciar <span className="font-bold text-blue-600"> Sesión</span>
          </p>
        </Link>

        <Link to="/auth/crear-cuenta">
          <p>
            Crear <span className="font-bold text-blue-600"> Cuenta</span>
          </p>
        </Link>
      </div>
    </>
  );
};

export default RecuperarPassword;

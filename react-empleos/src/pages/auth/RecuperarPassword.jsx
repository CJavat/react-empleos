import React from "react";
import { Link } from "react-router-dom";

const RecuperarPassword = () => {
  return (
    <>
      {/* //TODO: FALTA HACER LA PROGRAMACIÓN DE ESTE COMPONENTE*/}
      <p className="flex flex-col text-center movilS:text-sm movilL:text-lg tablet:text-3xl desktopL:text-5xl">
        <span className="text-blue-600 font-bold movilS:text-4xl tablet:text-6xl desktopL:text-9xl movilM:mb-2 desktopL:mb-6">
          Recuperar Cuenta
        </span>
        No pierdas tu acceso
      </p>

      <form className="flex flex-col items-center my-10 gap-5">
        <div className="flex flex-col gap-4 movilS:w-11/12 tablet:w-7/12">
          <label
            htmlFor="email"
            className="movilS:text-xl tablet:text-3xl desktopL:text-5xl"
          >
            Escribe tu email
          </label>

          <input
            name="email"
            type="text"
            placeholder="Email"
            className="w-full bg-black border-2 text-white border-blue-700 outline-none rounded-md pl-2 py-2 placeholder:text-white placeholder:pl-1 placeholder:text-sm tablet:text-2xl desktopL:text-4xl tablet:placeholder:text-2xl desktopL:placeholder:text-4xl"
          />
        </div>

        <input
          type="submit"
          value="Recuperar Contraseña"
          className="bg-white text-blue-600 border-2 rounded-lg font-bold px-7 py-1 movilS:w-11/12 tablet:w-7/12 movilS:text-lg tablet:text-2xl desktopL:text-4xl desktopL:desktopL:mt-7"
        />
      </form>

      <div className="flex justify-around w-full text-center my-6 desktopL:my-12 tablet:text-xl desktopL:text-3xl">
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

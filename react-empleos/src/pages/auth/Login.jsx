import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <p className="text-center text-xl sm:text-2xl mt-2 px-2 flex flex-col ">
        <span className="text-blue-600 font-bold text-5xl">Inicia Sesión</span>{" "}
        para encontrar tu empleo ideal
      </p>

      <form className="flex flex-col items-center mt-6 gap-5 mb-7 text-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-2/6 lg:w-1/5 xl:w-1/6 bg-blue-700 p-5 font-extrabold rounded-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>

        <div className="flex justify-center gap-3">
          <input
            type="text"
            placeholder="Usuario"
            className="w-full bg-black border-2 outline-none border-blue-700 rounded-md pl-2 text-white placeholder:text-white placeholder:pl-1 placeholder:text-sm"
          />
        </div>

        <div className="flex justify-center gap-3">
          <input
            type="password"
            placeholder="Password"
            className=" w-full bg-black border-2 outline-none border-blue-700 rounded-md pl-2 text-white placeholder:text-white placeholder:pl-1 placeholder:text-sm"
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className="text-white border-blue-700 font-bold border-2 mt-6 px-7 py-1 self-center rounded-lg w-5/6 lg:w-4/6 xl:w-2/6"
        />
      </form>

      <div className="flex text-center my-6 w-full justify-around">
        <Link to="/auth/recuperar-password">
          <p>
            Recuperar
            <span className="font-bold text-blue-600"> Contraseña</span>
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

export default Login;

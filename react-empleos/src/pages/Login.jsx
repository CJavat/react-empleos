import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-36 md:mt-20 my-auto">
      <h1 className="font-extrabold text-center text-5xl sm:text-7xl">
        <span className="text-blue-600">react</span>Empleos
      </h1>
      <div className="border-2 rounded mt-6 mx-auto">
        <p className="text-center text-xl sm:text-2xl mt-2 px-2">
          <span className="text-blue-600 font-bold">Inicia Sesión</span> para
          encontrar tu empleo Ideal
        </p>

        <div className="flex flex-col mt-6 gap-5 mb-7 text-lg">
          <div className="flex justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-11 h-11 text-blue-600 font-extrabold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <input
              type="text"
              placeholder="Usuario"
              className="bg-black border-2 outline-none rounded-md pl-1 text-blue-600 font-bold placeholder:text-gray-600 placeholder:pl-1"
            />
          </div>

          <div className="flex justify-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-11 h-11 text-blue-600 font-extrabold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              className=" bg-black border-2 outline-none rounded-md pl-1 text-blue-600 font-bold placeholder:text-gray-600 placeholder:pl-1"
            />
          </div>

          <input
            type="submit"
            value="Iniciar Sesión"
            className="text-blue-600 font-bold border-2 px-7 py-1 self-center rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

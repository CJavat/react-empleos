import React from "react";

const NuevoPassword = () => {
  return (
    //TODO: Falta hace la programación. - la funcionalidad de comprobar la cuenta
    <form className="flex flex-col items-center my-10 gap-5">
      <div className="flex flex-col gap-4 movilS:w-11/12 tablet:w-7/12">
        <label
          htmlFor="email"
          className="movilS:text-xl tablet:text-3xl desktopL:text-5xl"
        >
          Escribe el nuevo password
        </label>

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full bg-black border-2 text-white border-blue-700 outline-none rounded-md pl-2 py-2 placeholder:text-white placeholder:pl-1 placeholder:text-sm tablet:text-2xl desktopL:text-4xl tablet:placeholder:text-2xl desktopL:placeholder:text-4xl"
        />
      </div>

      <input
        type="submit"
        value="Recuperar Contraseña"
        className="bg-white text-blue-600 border-2 rounded-lg font-bold px-7 py-1 movilS:w-11/12 tablet:w-7/12 movilS:text-lg tablet:text-2xl desktopL:text-4xl desktopL:desktopL:mt-7"
      />
    </form>
  );
};

export default NuevoPassword;

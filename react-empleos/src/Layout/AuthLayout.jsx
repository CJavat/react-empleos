import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  //TODO: COMPROBAR SI EL USUARIO YA ESTA REGISTRADO, SINO REGRESARLO A LA PAGINA DE INICIO DE SESIÓN.
  //TODO: SI confirmado = 0 regresarlo a la pagina de inicio
  return (
    <main className="container w-full h-screen p-5 flex justify-center items-center">
      {/* Agregar Header */}
      <div className="">
        <Outlet />
      </div>
      {/* Agregar Footer */}
    </main>
  );
};

export default AuthLayout;

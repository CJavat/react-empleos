import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  //TODO: COMPROBAR SI EL USUARIO YA ESTA REGISTRADO, SINO REGRESARLO A LA PAGINA DE INICIO DE SESIÓN.
  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      {/* Agregar Header */}
      <div className="md:w-2/3 lg:w-2/5">
        <Outlet />
      </div>
      {/* Agregar Footer */}
    </main>
  );
};

export default AuthLayout;

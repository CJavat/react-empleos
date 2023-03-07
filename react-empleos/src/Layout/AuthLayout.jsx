import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  //TODO: COMPROBAR SI EL USUARIO YA ESTA REGISTRADO, SINO REGRESARLO A LA PAGINA DE INICIO DE SESIÓN.
  //TODO: HACER CONSULTA PARA DECODIFICAR EL JWT QUE ESTA EN EL LOCAL STORAGE, Y QUE DEVUELVA LOS DATOS DEL USUARIO.
  //TODO: SI DEVUELVE FALSE, PUES REGRESARLO AL LAYOUT PUBLICO.

  //TODO: HACER UN CONTEXT Y AHI AGREGAR TODOS LOS DATOS DEL USUARIO QUE ME DEVUELVE LA API.

  //TODO: SI confirmado = 0 regresarlo a la pagina de inicio
  return (
    <main className="container w-full h-screen p-5 flex justify-center items-center">
      {/* //TODO: Agregar Header */}
      <div className="">
        <Outlet />
      </div>
      {/* //TODO: Agregar Footer */}
    </main>
  );
};

export default AuthLayout;

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import clienteAxios from "../helpers/configAxios";
import useAuth from "../hooks/useAuth";

import Forbidden from "../components/Forbidden";
import Alerta from "../components/Alerta";

const AuthLayout = () => {
  //* Obtener variables del provider.
  const { usuarioLogeado, setUsuarioLogeado } = useAuth();

  //* Declaración de States.
  const [alerta, setAlerta] = useState("");
  const [errorAlerta, setErrorAlerta] = useState(false);
  const [errorConfirmacion, setErrorConfirmacion] = useState(true);
  const [errorEmpresaCreada, setErrorEmpresaCreada] = useState(true);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");

      const comprobarUsuario = async () => {
        const respuesta = await clienteAxios.post(
          `/auth/decodificar-token/${token}`
        );

        if (respuesta.data.confirmado === 1) setErrorConfirmacion(false);
        if (respuesta.data.empresaCreada === 1) setErrorEmpresaCreada(false);

        setUsuarioLogeado(respuesta.data);
      };
      comprobarUsuario();
    } catch (error) {
      console.log(error.response.data.message);
      setAlerta(error);
      setErrorAlerta(true);
    }
  }, []);

  //TODO: PONER UN SPINNER DE CARGAR, PARA EVITAR QUE SE VEAN ERRORES POR NO HABER TERMINADO DE HACER LA CONSULTA.

  return (
    <>
      {alerta ? <Alerta mensaje={alerta} error={errorAlerta} /> : null}

      {errorConfirmacion ? (
        <Forbidden />
      ) : errorEmpresaCreada ? (
        <Forbidden />
      ) : (
        <main className="container w-full h-screen p-5 flex justify-center items-center">
          {/* //TODO: AGREGAR UN HEADER */}
          <div className="">
            {/* //TODO: AGREGAR UN SIDEBAR */}
            <Outlet />
          </div>
          {/* //TODO: AGREGAR UN FOOTER*/}
        </main>
      )}
    </>
  );
};

export default AuthLayout;

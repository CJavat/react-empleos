import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import clienteAxios from "../helpers/configAxios";
import useAuth from "../hooks/useAuth";

import Forbidden from "../components/Forbidden";
import Alerta from "../components/Alerta";
import { Main } from "../components/Main";
import Spinner from "../components/Spinner";

const AuthLayout = () => {
  //* Obtener variables del provider.
  const { cargando, setCargando, setUsuarioLogeado } = useAuth();

  //* Declaración de States.
  const [alerta, setAlerta] = useState("");
  const [errorAlerta, setErrorAlerta] = useState(false);
  const [errorConfirmacion, setErrorConfirmacion] = useState(true);
  const [errorEmpresaCreada, setErrorEmpresaCreada] = useState(true);
  const [esEmpleado, setEsEmpleado] = useState(false);

  useEffect(() => {
    setCargando(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setCargando(false);
        return;
      }

      const comprobarUsuario = async () => {
        const respuesta = await clienteAxios.post(
          `/auth/decodificar-token/${token}`
        );

        if (respuesta.data.confirmado === 1) setErrorConfirmacion(false);
        if (respuesta.data.empresaCreada === 1) setErrorEmpresaCreada(false);

        setUsuarioLogeado(respuesta.data);
        if (respuesta.data.rol === "Empleado") {
          setEsEmpleado(true);
        }
      };
      comprobarUsuario();
    } catch (error) {
      setAlerta(error);
      setErrorAlerta(true);
    }
    setCargando(false);
  }, []);

  {
    return cargando ? (
      <Spinner />
    ) : (
      <>
        {alerta ? <Alerta mensaje={alerta} error={errorAlerta} /> : null}
        {errorConfirmacion ? (
          <Forbidden alerta={false} />
        ) : errorEmpresaCreada ? (
          esEmpleado ? (
            <Main />
          ) : (
            <Forbidden alerta={true} />
          )
        ) : (
          <Main />
        )}
      </>
    );
  }
};

export default AuthLayout;

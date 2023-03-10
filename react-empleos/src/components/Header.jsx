import React from "react";
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";
import logo from "../assets/ReactEmpleos.svg";
import logoCompleto from "../assets/reactEmpleos-logo-completo.svg";

const Header = () => {
  const navigate = useNavigate();
  const {
    usuarioLogeado,
    setDatosUsuario,
    setAlertaAtencion,
    setUsuarioLogeado,
    setCargando,
  } = useAuth();

  const cerrarSesion = () => {
    try {
      localStorage.removeItem("token");
      setUsuarioLogeado({});
      setDatosUsuario({});
      setAlertaAtencion(false);
      setCargando(true);
      navigate("/auth/iniciar-sesion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-blue-800 h-20 px-2 flex justify-between items-center w-full desktop:justify-around">
      <Link to="/">
        <img src={logo} alt="Logo reactEmpleos" className="" />
      </Link>

      <div className="flex gap-3 items-center justify-center movilS:flex-col tablet:flex-row">
        <Link
          to="#"
          className="font-bold py-2 px-3 border-2 rounded-lg border-none bg-blue-700 text-white hover:text-blue-600 hover:bg-white"
        >
          Hola {usuarioLogeado.nombre}
          {/* Mandarlo a su perfil */}
        </Link>

        <button
          type="button"
          className="hover:text-black"
          onClick={cerrarSesion}
        >
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
};

export default Header;

import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //* Declaración de state global.
  const [datosUsuario, setDatosUsuario] = useState({});
  const [alertaAtencion, setAlertaAtencion] = useState(false);
  const [usuarioLogeado, setUsuarioLogeado] = useState({});
  const [cargando, setCargando] = useState(true);

  return (
    <AuthContext.Provider
      value={{
        datosUsuario,
        alertaAtencion,
        usuarioLogeado,
        cargando,
        setDatosUsuario,
        setAlertaAtencion,
        setUsuarioLogeado,
        setCargando,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;

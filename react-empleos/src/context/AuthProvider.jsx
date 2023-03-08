import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //* Declaración de state global.
  const [datosUsuario, setDatosUsuario] = useState({});
  const [alertaAtencion, setAlertaAtencion] = useState(false);
  const [usuarioLogeado, setUsuarioLogeado] = useState({});

  return (
    <AuthContext.Provider
      value={{
        datosUsuario,
        alertaAtencion,
        usuarioLogeado,
        setDatosUsuario,
        setAlertaAtencion,
        setUsuarioLogeado,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;

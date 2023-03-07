import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //* Declaración de state global.
  const [datosUsuario, setDatosUsuario] = useState({});
  const [alertaAtencion, setAlertaAtencion] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        datosUsuario,
        alertaAtencion,
        setDatosUsuario,
        setAlertaAtencion,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;

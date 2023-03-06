import { BrowserRouter, Routes, Route } from "react-router-dom";

//! IMPORTAR LAYOUTS --
import AuthLayout from "./Layout/AuthLayout";
import PublicLayout from "./Layout/PublicLayout";

//! IMPORTAR COMPONENTES PAGES.
import Login from "./pages/auth/Login";
import RecuperarPassword from "./pages/auth/RecuperarPassword";
import CrearCuenta from "./pages/auth/CrearCuenta";

import Inicio from "./pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<PublicLayout />}>
          <Route path="/auth/iniciar-sesion" element={<Login />} />
          <Route path="/auth/crear-cuenta" element={<CrearCuenta />} />
          <Route
            path="/auth/recuperar-password"
            element={<RecuperarPassword />}
          />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Inicio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

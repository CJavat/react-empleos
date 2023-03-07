import { BrowserRouter, Routes, Route } from "react-router-dom";

//! IMPORTAR LAYOUTS --
import AuthLayout from "./Layout/AuthLayout";
import PublicLayout from "./Layout/PublicLayout";

//! IMPORTAR COMPONENTES PAGES.
import Login from "./pages/auth/Login";
import RecuperarPassword from "./pages/auth/RecuperarPassword";
import CrearCuenta from "./pages/auth/CrearCuenta";
import ComprobarCuenta from "./pages/auth/ComprobarCuenta";
import NuevoPassword from "./components/NuevoPassword";

import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/auth/iniciar-sesion" element={<Login />} />
          <Route path="/auth/crear-cuenta" element={<CrearCuenta />} />
          <Route
            path="/auth/recuperar-password"
            element={<RecuperarPassword />}
          />
          <Route
            path="/auth/comprobar-cuenta/:token"
            element={<ComprobarCuenta />}
          />
          <Route
            path="/auth/nuevo-password/:token"
            element={<NuevoPassword />}
          />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Inicio />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

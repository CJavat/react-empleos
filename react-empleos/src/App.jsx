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
import CrearEmpresa from "./pages/auth/CrearEmpresa";
import { AuthProvider } from "./context/AuthProvider";
import Vacante from "./components/Vacante";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
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
            <Route path="/auth/crear-empresa" element={<CrearEmpresa />} />
          </Route>

          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Inicio />} />
            <Route path="/mostrar-vacante/:id" element={<Vacante />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

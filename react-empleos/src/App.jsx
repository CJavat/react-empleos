import { BrowserRouter, Routes, Route } from "react-router-dom";

//! IMPORTAR CONTEXT --
import { AuthProvider } from "./context/AuthProvider";

//! IMPORTAR LAYOUTS --
import AuthLayout from "./Layout/AuthLayout";
import PublicLayout from "./Layout/PublicLayout";

//! IMPORTAR COMPONENTES PAGES.
//* PUBLIC
import Login from "./pages/auth/Login";
import RecuperarPassword from "./pages/auth/RecuperarPassword";
import CrearCuenta from "./pages/auth/CrearCuenta";
import ComprobarCuenta from "./pages/auth/ComprobarCuenta";
import NuevoPassword from "./components/NuevoPassword";

//* PAGES
import Inicio from "./pages/Inicio";
import NotFound from "./pages/NotFound";

//* USUARIO
import Usuario from "./pages/Usuario";
import EditarUsuario from "./pages/EditarUsuario";

//* VACANTES
import Vacante from "./components/Vacante";

//* EMPRESA
import CrearEmpresa from "./pages/auth/CrearEmpresa";
import Empresa from "./pages/Empresa";
import EditarEmpresa from "./pages/EditarEmpresa";
import EditarVacante from "./pages/EditarVacante";

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

            <Route path="/usuario/perfil/:id" element={<Usuario />} />
            <Route
              path="/usuario/editar/:id"
              element={<EditarUsuario />} /* //TODO: FALTA POR HACER */
            />

            <Route path="/vacante/mostrar-vacante/:id" element={<Vacante />} />
            <Route
              path="/vacante/editar-vacante/:id"
              element={<EditarVacante />}
            />

            <Route path="/empresa/:id" element={<Empresa />} />
            <Route
              path="/empresa/editar/:id"
              element={<EditarEmpresa />} /* //TODO: FALTA POR HACER */
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

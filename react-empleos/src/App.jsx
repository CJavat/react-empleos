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
import MiPerfil from "./pages/MiPerfil";
import NotFound from "./pages/NotFound";

//* USUARIO
import Usuario from "./pages/Usuario";
import EditarUsuario from "./pages/EditarUsuario";

//* VACANTES
import Vacante from "./components/Vacante";
import CrearVacante from "./pages/CrearVacante";
import EditarVacante from "./pages/EditarVacante";
import VerVacantes from "./pages/VerVacantes";

//* EMPRESA
import CrearEmpresa from "./pages/auth/CrearEmpresa";
import EditarEmpresa from "./pages/EditarEmpresa";
import VerEmpresas from "./pages/VerEmpresas";
import VerEmpresa from "./pages/VerEmpresa";
import MiEmpresa from "./pages/MiEmpresa";

//TODO: AL FINALIZAR EL PROYECTO, INSTALAR sweetalert2 Y EN TODOS LOS TRY-CATCH, CAMBIAR LOS MENSAJES DE CONSOLA POR LA ALERTA.

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
            <Route path="/mi-perfil" element={<MiPerfil />} />
            <Route path="/mi-empresa" element={<MiEmpresa />} />
            <Route path="/usuario/perfil/:id" element={<Usuario />} />
            //TODO: FALTA POR HACER
            <Route path="/usuario/editar/:id" element={<EditarUsuario />} />
            //TODO: FALTA POR HACER
            <Route path="/crear-vacante" element={<CrearVacante />} />
            <Route path="/ver-vacantes" element={<VerVacantes />} />
            <Route path="/vacante/mostrar-vacante/:id" element={<Vacante />} />
            //TODO: FALTA POR HACER
            <Route
              path="/vacante/editar-vacante/:id"
              element={<EditarVacante />}
            />
            <Route path="/ver-empresas" element={<VerEmpresas />} />
            <Route path="/empresa/:id" element={<VerEmpresa />} />
            //TODO: FALTA POR HACER
            <Route path="/empresa/editar/:id" element={<EditarEmpresa />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

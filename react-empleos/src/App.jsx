import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./Layout/AuthLayout";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          // Ruta principal
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

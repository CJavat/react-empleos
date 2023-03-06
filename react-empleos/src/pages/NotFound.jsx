import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center font-bold text-center">
      <h1 className="text-blue-600 text-7xl">ERROR 404</h1>
      <h2 className="text-white text-5xl">PAGINA NO ENCONTRADA</h2>

      <Link
        to="/"
        className="text-white border-blue-700 font-bold border-2 mt-28 px-7 py-1 self-center rounded-lg "
      >
        REGRESAR AL INICIO
      </Link>
    </div>
  );
};

export default NotFound;

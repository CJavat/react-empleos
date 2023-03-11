import { Link } from "react-router-dom";
import formatearDinero from "../helpers/formatearDinero";

const Vacantes = (props) => {
  const { _id, nombre, salario, empresa } = props.vacante;

  return (
    <div className="flex flex-col justify-center gap-3 px-7 py-4 border rounded-xl border-blue-600 w-5/6 tablet:w-4/6 laptop:w-3/6 desktop:w-2/6 desktopL:w-1/6">
      {/* //TODO: FALTA ACOMODAR LOS ESTILOS DE ESTE CONTENEDOR Y DEL PADRE */}
      <div className="flex flex-col justify-center gap-3 px-7 py-4 w-5/6 tablet:w-4/6 laptop:w-3/6 desktop:w-2/6 desktopL:w-1/6">
        <p className="self-center font-bold text-blue-600 text-3xl">{nombre}</p>
        <p>
          Salario: <span className="font-bold">{formatearDinero(salario)}</span>
        </p>
        <p>
          Empresa: <span className="font-bold">{empresa.empresa}</span>
        </p>
        <p>
          País: <span className="font-bold">{empresa.pais}</span>
        </p>
        <Link
          to={`/vacante/mostrar-vacante/${_id}`}
          className="border-2 rounded-2xl w-fit py-2 px-4 font-bold border-blue-700 bg-blue-600 hover:text-blue-600 hover:border-gray-700 hover:bg-white"
        >
          Más Info
        </Link>
      </div>

      {/* //TODO: FALTA AGREGAR QUE SE VEA EL LOGO DE LA EMPRESA QUE CREO LA VACANTE */}
      {/* <div className="flex flex-col justify-center items-center w-full tablet:justify-end">
        {hayLogo ? (
          <img
            src={rutaLogo}
            alt="logo estatico"
            className="border-2 border-blue-600 rounded-lg object-contain movilS:w-44 movilL:w-56 laptop:w-72 desktop:w-80 desktopL:w-96 movilS:h-44 movilL:h-56 laptop:h-72 desktop:h-80 desktopL:h-96"
          />
        ) : (
          <p className="flex justify-center items-center font-bold text-red-600 border-blue-600 border-2 px-7 py-7 rounded-lg movilS:w-44 movilL:w-56 laptop:w-72 desktop:w-80 desktopL:w-96 movilS:h-44 movilL:h-56 laptop:h-72 desktop:h-80 desktopL:h-96">
            NO HAY UN LOGO DISPONIBLE
          </p>
        )}

        {empresa.urlEmpresa ? (
          <p className="my-5 font-bold text-lg text-center">
            Visitanos en:{" "}
            <span className="block text-blue-600">{empresa.urlEmpresa}</span>
          </p>
        ) : (
          <p className="text-red-600">La URL de la página no existe</p>
        )}
      </div> */}
    </div>
  );
};

export default Vacantes;

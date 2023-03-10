import { Link } from "react-router-dom";
import formatearDinero from "../helpers/formatearDinero";

const Vacantes = (props) => {
  const { _id, nombre, salario, empresa } = props.vacante;

  return (
    <div className="flex flex-col justify-center gap-3 px-7 py-4 border rounded-xl border-blue-600 w-5/6 tablet:w-4/6 laptop:w-3/6 desktop:w-2/6 desktopL:w-1/6">
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
  );
};

export default Vacantes;

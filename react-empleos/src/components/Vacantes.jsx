import { Link } from "react-router-dom";
import formatearDinero from "../helpers/formatearDinero";

const Vacantes = (props) => {
  const { _id, nombre, salario, empresa } = props.vacante;

  return (
    <div className="flex flex-col justify-center gap-3 px-3 py-4 border rounded-xl border-blue-600 w-5/6">
      <p className="self-center font-bold text-blue-600 text-3xl">{nombre}</p>
      <p>Salario: {formatearDinero(salario)}</p>
      <p>{empresa.empresa}</p>
      <p>{empresa.pais}</p>
      <Link
        to={`/mostrar-vacante/${_id}"`}
        className="border-2 rounded-2xl w-fit py-2 px-4 font-bold border-blue-700 bg-blue-600"
      >
        Más Info
      </Link>
    </div>
  );
};

export default Vacantes;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import formatearDinero from "../helpers/formatearDinero";
import clienteAxios from "../helpers/configAxios";

const Vacante = () => {
  const { id } = useParams();

  const [datosVacante, setDatosVacante] = useState({});

  useEffect(() => {
    try {
      const obtenerVacante = async () => {
        const respuesta = await clienteAxios.get(
          `/vacantes/mostrar-vacante/${id}`
        );
        setDatosVacante(respuesta.data);
        // console.log(respuesta.data);
      };
      obtenerVacante();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center gap-3 my-5 px-7 py-4 border rounded-xl border-blue-600 w-5/6 tablet:w-4/6 laptop:w-3/6 desktop:w-2/6 desktopL:w-1/6 laptop:flex-row-reverse laptop:gap-12 desktop:flex-row-reverse desktop:gap-14">
      <div className="self-center font-bold text-blue-600 text-3xl">
        {/* //TODO: CREAR UNA RUTA PARA VER EL PERFIL DE LA EMPRESA */}
        <Link to={`/empresa/${datosVacante.empresa?._id}`}>
          {datosVacante.empresa?.empresa}
        </Link>
      </div>

      <div className="flex flex-col gap-3 text-xl">
        <p className="font-bold text-white text-2xl ">{datosVacante.nombre}</p>
        <p>
          Salario:{" "}
          <span className="text-gray-500">
            {formatearDinero(datosVacante.salario)} al mes
          </span>
        </p>
        <p>
          Dias de trabajo:{" "}
          <span className="text-gray-500">{datosVacante.diasTrabajo}</span>
        </p>
        <p>
          Pais:{" "}
          <span className="text-gray-500">{datosVacante.empresa?.pais}</span>
        </p>
        <p>
          Estado:{" "}
          <span className="text-gray-500">{datosVacante.empresa?.estado}</span>
        </p>
        <p>
          Página de la empresa:{" "}
          <span className="text-gray-500">
            {datosVacante.empresa?.urlEmpresa}
          </span>
        </p>

        <p>
          Descripción de la vacante:{" "}
          <span className="text-gray-500"> {datosVacante.descripcion}</span>
        </p>

        <h3>Contactanos</h3>
        <p>Nombre: {datosVacante.empresa?.reclutador.nombre}</p>
        <p>Email: {datosVacante.empresa?.reclutador.email}</p>
        <p>Télefono: {datosVacante.empresa?.reclutador.telefono}</p>

        {/* //TODO: DESPUÊS CREAR UN MIDDLEWARE, PARA QUE ENVIE EL CORREO AL POSTULARSE Y HACER OTRO MODELO QUE GUARDE LAS POSTULACIONES A LA DB. */}
        <button
          type="button"
          className="border-2 rounded-2xl w-fit py-2 px-4 font-bold border-blue-700 bg-blue-600 hover:text-blue-600 hover:border-gray-700 hover:bg-white"
        >
          Postularme a la Vacante
        </button>
      </div>
    </div>
  );
};

export default Vacante;

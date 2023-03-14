import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import formatearDinero from "../helpers/formatearDinero";
import clienteAxios from "../helpers/configAxios";
import useAuth from "../hooks/useAuth";
import Alerta from "./Alerta";

const Vacante = () => {
  //* Obtener variables del provider.
  const { cargando, setCargando, usuarioLogeado } = useAuth();

  const { id } = useParams();

  const [datosVacante, setDatosVacante] = useState({});
  const [rutaLogo, setRutaLogo] = useState("");
  const [hayLogo, setHayLogo] = useState(false);
  const [esMiVacante, setEsMiVacante] = useState(false);
  const [enviarDatos, setEnviarDatos] = useState({});
  const [errorAlerta, setErrorAlerta] = useState(true);
  const [mensajeAlerta, setMensajeAlerta] = useState("");

  useEffect(() => {
    setCargando(true);
    try {
      const obtenerVacante = async () => {
        const respuesta = await clienteAxios.get(
          `/vacantes/mostrar-vacante/${id}`
        );
        setDatosVacante(respuesta.data);

        setEsMiVacante(
          (await respuesta.data.empresa.reclutador._id) == usuarioLogeado._id
        );

        if (respuesta.data?.empresa?.logoEmpresa.length > 0) {
          setRutaLogo(
            `http://localhost:5000/${respuesta.data.empresa.logoEmpresa}`
          );
          setHayLogo(true);
        } else {
          setHayLogo(false);
        }

        setEnviarDatos({
          usuariosPostulados: usuarioLogeado._id,
          emailUsuario: usuarioLogeado.email,
          emailEmpresa: datosVacante.empresa.reclutador?.email,
        });
      };
      obtenerVacante();
    } catch (error) {
      console.log(error);
    }

    setCargando(false);
    //TODO: CHECAR QUE FUNCIONE BIEN ESTO.
  }, [datosVacante.empresa?.reclutador?.email]);

  // console.log(enviarDatos);

  const postularUsuario = async () => {
    try {
      // console.log(datosVacante.empresa.reclutador.email); //* ENVIAR LOS DATOS POR EL BODY.
      // console.log(usuarioLogeado.email); //* ENVIAR LOS DATOS POR EL BODY.
      //TODO: CHECAR QUE FUNCIONE BIEN ESTO.
      const respuesta = await clienteAxios.put(
        `/vacantes/postularme/${id}`,
        enviarDatos
      );
      console.log(respuesta.data.msg);
      setMensajeAlerta(respuesta.data.msg);
      setErrorAlerta(false);
    } catch (error) {
      console.log(error);
      setMensajeAlerta(error);
      setErrorAlerta(true);
    }
  };

  {
    return cargando ? (
      <Spinner />
    ) : (
      <div className="flex flex-col justify-center gap-3 my-5 px-7 py-4 border rounded-xl border-blue-600 w-5/6 tablet:w-4/6 laptop:w-5/6 desktop:w-4/6 desktopL:w-3/6 laptop:flex-row-reverse laptop:gap-12 desktop:flex-row-reverse desktop:gap-14 desktop:mb-5 desktopL:mt-9 desktopL:mb-60">
        <p>{datosVacante.emailEmpresa}s</p>
        <div className="flex flex-col justify-center items-center gap-5 self-center font-bold text-blue-600 text-3xl laptop:w-5/6 desktopL:w-11/12">
          <Link
            to={`/empresa/${datosVacante.empresa?._id}`}
            className="hover:text-white"
          >
            {datosVacante.empresa?.empresa}
          </Link>

          {hayLogo ? (
            <img
              src={rutaLogo}
              alt={`Logo - ${rutaLogo}`}
              className="border-2 border-blue-600 rounded-lg object-center object-cover movilS:w-56 movilS:h-56"
            />
          ) : (
            <p className="text-red-600 border-blue-600 border-2 w-4/6 px-7 py-7 rounded-lg">
              NO HAY UN LOGO DISPONIBLE
            </p>
          )}
        </div>

        {mensajeAlerta ? (
          <Alerta mensaje={mensajeAlerta} error={errorAlerta} />
        ) : null}

        <div className="flex flex-col gap-3 text-xl">
          <p className="font-bold text-white text-2xl ">
            {datosVacante.nombre}
            {esMiVacante ? (
              <span className="bg-indigo-500 text-white ml-3 mt-1 top-0 text-xs font-bold rounded-xl px-2 py-1 uppercase">
                Propietario
              </span>
            ) : null}
          </p>
          <p>
            Salario:{" "}
            <span className="text-gray-500 font-bold">
              {formatearDinero(datosVacante.salario)} al mes
            </span>
          </p>
          <p>
            Dias de trabajo:{" "}
            <span className="text-gray-500 font-bold">
              {datosVacante.diasTrabajo}
            </span>
          </p>
          <p>
            Pais:{" "}
            <span className="text-gray-500 font-bold capitalize">
              {datosVacante.empresa?.pais}
            </span>
          </p>
          <p>
            Estado:{" "}
            <span className="text-gray-500 font-bold capitalize">
              {datosVacante.empresa?.estado}
            </span>
          </p>
          <p className="overflow-hidden">
            Página de la empresa:{" "}
            <span className="text-gray-500 font-bold">
              <a href="">{datosVacante.empresa?.urlEmpresa}</a>
            </span>
          </p>

          <p>
            Descripción de la vacante:{" "}
            <span className="text-gray-500 font-bold">
              {" "}
              {datosVacante.descripcion}
            </span>
          </p>

          <h3 className="font-bold text-blue-700 text-3xl mt-5">Contactanos</h3>
          <p>
            Nombre:{" "}
            <span className="text-gray-500 font-bold capitalize">
              {datosVacante.empresa?.reclutador.nombre}
            </span>
          </p>
          <p>
            Email:{" "}
            <span className="text-gray-500 font-bold">
              {datosVacante.empresa?.reclutador.email}
            </span>
          </p>
          <p>
            Télefono:{" "}
            <span className="text-gray-500 font-bold">
              {datosVacante.empresa?.reclutador.telefono}
            </span>
          </p>

          {/* //TODO: DESPUÊS CREAR UN MIDDLEWARE, PARA QUE ENVIE EL CORREO AL POSTULARSE Y HACER OTRO MODELO QUE GUARDE LAS POSTULACIONES A LA DB. */}
          <div className="flex justify-center items-center movilS:flex-col">
            {/* //TODO: CUANDO YA ESTA POSTULADO EL USUARIO, CAMBIAR EL BOTON POR UN MENSAJE, QUE LE INDIQUE QUE YA SE POSTULÓ */}

            {usuarioLogeado.rol === "Empleado" ? (
              <button
                type="button"
                className="uppercase text-center border-2 rounded-2xl w-fit mt-3 py-2 px-4 font-bold border-blue-700 bg-blue-600 hover:text-blue-600 hover:border-gray-700 hover:bg-white"
                onClick={postularUsuario}
              >
                Postularme a la Vacante
              </button>
            ) : datosVacante.usuariosPostulados ? (
              <Link
                to={`/vacante/postulaciones/${id}`}
                className="relative uppercase text-center border-2 rounded-2xl w-fit mt-3 py-2 px-4 font-bold border-blue-700 bg-blue-600 hover:text-blue-600 hover:border-indigo-600 hover:bg-white"
              >
                Ver Usuarios Postulados{" "}
                <span className="block w-7 h-7 text-center absolute rounded-full bg-red-400 -top-3 -right-3">
                  {datosVacante.usuariosPostulados.length}
                </span>
              </Link>
            ) : null}

            {esMiVacante ? (
              <Link
                to={`/vacante/editar-vacante/${id}`}
                className="uppercase text-center border-2 rounded-2xl w-fit mt-3 py-2 px-4 font-bold border-indigo-700 bg-indigo-600 hover:text-indigo-600 hover:border-blue-600 hover:bg-white"
              >
                Editar Vacante
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};

export default Vacante;

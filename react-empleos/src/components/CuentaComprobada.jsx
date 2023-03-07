import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import clienteAxios from "../helpers/configAxios";
import Alerta from "./Alerta";

const CuentaComprobada = ({ token }) => {
  const navigate = useNavigate();

  const [alerta, setAlerta] = useState("");
  const [errorAlerta, setErrorAlerta] = useState(false);

  useEffect(() => {
    const comprobarCuenta = async () => {
      try {
        const resultado = await clienteAxios.post(
          `/auth/comprobar-cuenta/${token}`
        );

        setAlerta(resultado.data.msg);
        setErrorAlerta(false);
        console.log(alerta);
      } catch (error) {
        setAlerta(error.response.data.message);
        setErrorAlerta(true);
        console.log(errorAlerta);
      }
    };

    comprobarCuenta();
  }, []);

  //TODO: HACER QUE FUNCIONE ESTA PARTE. ERROR TENGO QUE COMPROBAR QUE ERROR ALERTA ES LA UQUE FALLA PORQUE LE DOY FALSE Y NO ENTRA

  return (
    <>
      {errorAlerta ? (
        <>
          {alerta ? <Alerta mensaje={alerta} error={errorAlerta} /> : null}
          <p className="flex flex-col text-center my-14 movilS:text-sm movilL:text-lg tablet:text-3xl desktopL:text-5xl">
            <span className="text-blue-600 font-bold movilS:text-4xl tablet:text-6xl desktopL:text-9xl movilM:mb-2 desktopL:mb-6">
              Ha ocurrido un error
            </span>
            Intenta de nuevo
          </p>
        </>
      ) : (
        <p className="flex flex-col text-center my-14 movilS:text-sm movilL:text-lg tablet:text-3xl desktopL:text-5xl">
          <span className="text-blue-600 font-bold movilS:text-4xl tablet:text-6xl desktopL:text-9xl movilM:mb-2 desktopL:mb-6">
            PRUEBA
          </span>
          Funciona el token
        </p>
      )}
      ;
    </>
  );
  //TODO: MOSTRAR ALERTA DE ERROR.
};

export default CuentaComprobada;

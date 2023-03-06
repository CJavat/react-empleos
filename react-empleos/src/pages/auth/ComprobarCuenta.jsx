import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NuevoPassword from "../../components/NuevoPassword";
import clienteAxios from "../../helpers/configAxios";

const ComprobarCuenta = () => {
  const { token } = useParams();
  const tokens = token.split("&");

  const [tokenEsValido, setTokenEsValido] = useState(false);

  useEffect(() => {
    const comprobarToken = async () => {
      console.log(tokens);
      const respuesta = await clienteAxios.post(
        `/auth/comprobar-token/${tokens[0]}.${tokens[1]}.${tokens[2]}`
      );

      setTokenEsValido(respuesta.data.tokenValido);
    };

    try {
      comprobarToken();
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }, []);

  return tokenEsValido ? (
    <NuevoPassword />
  ) : (
    <p className="flex flex-col text-center my-14 movilS:text-sm movilL:text-lg tablet:text-3xl desktopL:text-5xl">
      <span className="text-blue-600 font-bold movilS:text-4xl tablet:text-6xl desktopL:text-9xl movilM:mb-2 desktopL:mb-6">
        El token no es válido
      </span>
      Por favor, intenta de nuevo
    </p>
  );
};

export default ComprobarCuenta;

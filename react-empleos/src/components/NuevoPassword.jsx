import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import clienteAxios from "../helpers/configAxios";

const NuevoPassword = () => {
  //* Declaración del useNavigate
  const navigate = useNavigate();

  //* Obtener token y juntarlo.
  const { token } = useParams();
  const tokenFragmentado = token.split("&");
  const tokenCompleto = `${tokenFragmentado[0]}.${tokenFragmentado[1]}.${tokenFragmentado[2]}`;

  //* Declaración de States.
  const [alerta, setAlerta] = useState("");
  const [alertaError, setAlertaError] = useState(false);
  const [tokenEsValido, setTokenEsValido] = useState(false);

  useEffect(() => {
    try {
      const comprobarToken = async () => {
        const respuesta = await clienteAxios.post(
          `/auth/comprobar-token/${tokenCompleto}`
        );

        if (respuesta.data.tokenValido === false) {
          setTokenEsValido(respuesta.data.tokenValido);
          setAlerta(respuesta.data.msg);
          setAlertaError(true);
          return;
        }
        setTokenEsValido(respuesta.data.tokenValido);
        setAlerta(respuesta.data.msg);
        setAlertaError(true);

        setTimeout(() => {
          setAlerta("");
          //navigate("/auth/iniciar-sesion");
        }, 5000);
      };

      comprobarToken();
    } catch (error) {
      console.log(error);
      setAlerta(error.response.data.message);
      setAlertaError(true);

      setTimeout(() => {
        setAlerta("");
      }, 5000);
    }
  }, []);

  //TODO: FALTA PONER LA FUNCION DEL ONSBUMIT AQUI, DONDE HACE YA LA CONSULTA A LA URL DONDE SE CAMBIA EL PASSWORD.

  return (
    //TODO: Falta hace la programación. - la funcionalidad de comprobar la cuenta
    <>
      {tokenEsValido ? (
        <form className="flex flex-col items-center my-10 gap-5">
          <div className="flex flex-col gap-4 movilS:w-11/12 tablet:w-7/12">
            <label
              htmlFor="email"
              className="movilS:text-xl tablet:text-3xl desktopL:text-5xl"
            >
              Escribe el nuevo password
            </label>

            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full bg-black border-2 text-white border-blue-700 outline-none rounded-md pl-2 py-2 placeholder:text-white placeholder:pl-1 placeholder:text-sm tablet:text-2xl desktopL:text-4xl tablet:placeholder:text-2xl desktopL:placeholder:text-4xl"
            />
          </div>

          <input
            type="submit"
            value="Recuperar Contraseña"
            className="bg-white text-blue-600 border-2 rounded-lg font-bold px-7 py-1 movilS:w-11/12 tablet:w-7/12 movilS:text-lg tablet:text-2xl desktopL:text-4xl desktopL:desktopL:mt-7"
          />
        </form>
      ) : null}{" "}
      //TODO: FALTA PONER AQUI MENSAJE DE ALERTA QUE EL TOKEN NO ES VÁLIDO.
    </>
  );
};

export default NuevoPassword;

import useAuth from "../hooks/useAuth";

const Inicio = () => {
  const { usuarioLogeado } = useAuth();
  return (
    <div className="flex flex-col justify-center items-center">
      {/* //TODO: EMPEZAR A HACER ESTE LAYOUT */}
      <p className="flex flex-col text-center movilS:text-sm movilL:text-lg tablet:text-3xl desktopL:text-5xl">
        <span className="text-blue-600 font-bold movilS:text-4xl tablet:text-6xl desktopL:text-9xl">
          TRABAJOS
        </span>
      </p>
      {/* MOSTRAR TODOS LOS EMPLEOS */}
    </div>
  );
};

export default Inicio;

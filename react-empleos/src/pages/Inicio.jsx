import useAuth from "../hooks/useAuth";

const Inicio = () => {
  const { usuarioLogeado } = useAuth();
  return (
    <div>
      {/* //TODO: EMPEZAR A HACER ESTE LAYOUT */}
      <h1>Inicio - HOLA: {usuarioLogeado.nombre}</h1>
    </div>
  );
};

export default Inicio;

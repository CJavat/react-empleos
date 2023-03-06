import { Outlet } from "react-router-dom";

const PublicLayout = ({ titulo, subtitulo }) => {
  return (
    <div className="flex flex-col items-center mt-36 md:mt-20 my-auto">
      <h1 className="font-extrabold text-center text-5xl sm:text-7xl">
        <span className="text-blue-600">react</span>Empleos
      </h1>
      <div className="border-2 rounded-3xl mt-6 mx-auto w-11/12 md:w-7/12 h-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;

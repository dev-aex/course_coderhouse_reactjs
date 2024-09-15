import Base from "../../layout/Base";
import NavBar from "../../components/NavBar";

const NotFound = () => {
  return (
    <Base>
      <NavBar />
      <div className="w-full h-full mt-3xl flex justify-center ">
        <p className="flex flex-col text-ferre_blue200">
          <span className="text-[112px] text-center">404</span>
          <span className="text-[32px] text-center">Página no encontrada</span>
        </p>
      </div>
    </Base>
  );
};

export default NotFound;

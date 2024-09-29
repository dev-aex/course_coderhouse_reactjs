import { NavLink } from "react-router-dom";
import NavButton from "../NavButton";

const NavBar = ({
  inicio,
  construccion,
  herramientas,
  herreria,
  plomeria,
  pintura,
}) => {
  return (
    <ul className="w-full h-fit items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-md">
      <li className="flex justify-center items-center">
        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <NavButton active={inicio}>Inicio</NavButton>
        </NavLink>
      </li>
      <li className="flex justify-center items-center">
        <NavLink to="/construccion" onClick={() => window.scrollTo(0, 0)}>
          <NavButton active={construccion}>Construcción</NavButton>
        </NavLink>
      </li>
      <li className="flex justify-center items-center">
        <NavLink to="/herramientas" onClick={() => window.scrollTo(0, 0)}>
          <NavButton active={herramientas}>Herramientas</NavButton>
        </NavLink>
      </li>
      <li className="flex justify-center items-center">
        <NavLink to="/herreria" onClick={() => window.scrollTo(0, 0)}>
          <NavButton active={herreria}>Herrería</NavButton>
        </NavLink>
      </li>
      <li className="flex justify-center items-center">
        <NavLink to="/plomeria" onClick={() => window.scrollTo(0, 0)}>
          <NavButton active={plomeria}>Plomería</NavButton>
        </NavLink>
      </li>
      <li className="flex justify-center items-center">
        <NavLink to="/pintura" onClick={() => window.scrollTo(0, 0)}>
          <NavButton active={pintura}>Pintura</NavButton>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;

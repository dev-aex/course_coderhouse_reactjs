import { NavLink } from "react-router-dom";
import NavButton from "../NavButton";

const NavBar = ({inicio, construccion, herramientas, herreria, plomeria, pintura}) => {
  return (
    <ul className="w-full h-lg flex gap-md justify-between">
      <li>
        <NavLink to="/">
          <NavButton active={inicio}>Inicio</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/construccion">
          <NavButton active={construccion}>Construcción</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/herramientas">
          <NavButton active={herramientas}>Herramientas</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/herreria">
          <NavButton active={herreria}>Herrería</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/plomeria">
          <NavButton active={plomeria}>Plomería</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/pintura">
          <NavButton active={pintura}>Pintura</NavButton>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;

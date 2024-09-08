import { NavLink } from "react-router-dom";
import NavButton from "../NavButton";

const NavBar = () => {
  return (
    <ul className="w-full h-lg flex gap-md justify-between">
      <li>
        <NavLink to="/">
          <NavButton>Inicio</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/construccion">
          <NavButton>Construcción</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/herramientas">
          <NavButton>Herramientas</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/herreria">
          <NavButton>Herrería</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/plomeria">
          <NavButton>Plomería</NavButton>
        </NavLink>
      </li>
      <li>
        <NavLink to="/pintura">
          <NavButton>Pintura</NavButton>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;

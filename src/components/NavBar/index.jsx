import NavButton from "../NavButton";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex gap-md justify-between">
        <li>
          <NavButton texto={"Construcción"} />
        </li>
        <li>
          <NavButton texto={"Herramientas"} />
        </li>
        <li>
          <NavButton texto={"Herrería"} />
        </li>
        <li>
          <NavButton texto={"Plomería"} />
        </li>
        <li>
          <NavButton texto={"Pintura"} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

import ItemListContainer from "../../containers/ItemListContainer";

const NavBar = () => {
  return (
    <ItemListContainer
      links={[
        "Construcción",
        "Herramientas",
        "Herrería",
        "Plomería",
        "Pintura",
      ]}
    />
  );
};

export default NavBar;

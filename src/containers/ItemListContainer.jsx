import NavButton from "../components/NavButton";

const ItemListContainer = ({ links }) => {
  return (
    <ul className="flex gap-md justify-between">
      {links.map((link) => (
        <li key={link}>
          <NavButton text={link} />
        </li>
      ))}
    </ul>
  );
};

export default ItemListContainer;

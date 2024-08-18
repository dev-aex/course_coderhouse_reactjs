const NavButton = ({ texto }) => {
  return (
    <button className="px-sm py-2xs text-base font-semibold text-primario-400 rounded-md hover:bg-primario-300 hover:text-blanco active:bg-primario-50">
      {texto}
    </button>
  );
};

export default NavButton;

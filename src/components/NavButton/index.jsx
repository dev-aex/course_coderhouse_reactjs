const NavButton = ({ children, active }) => {
  return (
    <button
      className={`${
        active
          ? "px-xs text-base font-bold text-ferre_blue200 border-b-2"
          : "px-xs text-base font-bold text-ferre_blue300 hover:text-ferre_blue400 hover:border-b-2 active:text-ferre_yellow"
      }`}
    >
      {children}
    </button>
  );
};

export default NavButton;

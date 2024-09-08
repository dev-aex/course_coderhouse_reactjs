const NavButton = ({ text }) => {
  return (
    <button className="px-xs text-base font-bold text-ferre_blue300 hover:text-ferre_blue400 hover:border-b-2 active:text-ferre_yellow">
      {text}
    </button>
  );
};

export default NavButton;

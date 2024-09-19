import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const ShoppingCart = ({ quantity }) => {
  const context = useContext(ShoppingCartContext);

  return (
    <section
      className="relative p-[6px]"
      onClick={() => context.setShowShoppingCart(!context.showShoppingCart)}
    >
      <span className="absolute bottom-sm left-sm w-fit h-fit px-[6px] py-[2px] flex justify-center items-center text-blanco rounded-[100%] font-bold bg-primario-100">
        {quantity}
      </span>
      <svg
        className="hover:cursor-pointer hover:opacity-80"
        width="25"
        height="26"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.52307 25.5C6.83557 25.5 6.24724 25.2554 5.75807 24.7662C5.2689 24.2771 5.0239 23.6883 5.02307 23C5.02224 22.3116 5.26724 21.7233 5.75807 21.235C6.2489 20.7466 6.83724 20.5016 7.52307 20.5C8.2089 20.4983 8.79765 20.7433 9.28932 21.235C9.78099 21.7266 10.0256 22.315 10.0231 23C10.0206 23.685 9.77599 24.2737 9.28932 24.7662C8.80265 25.2587 8.2139 25.5033 7.52307 25.5ZM20.0231 25.5C19.3356 25.5 18.7472 25.2554 18.2581 24.7662C17.7689 24.2771 17.5239 23.6883 17.5231 23C17.5222 22.3116 17.7672 21.7233 18.2581 21.235C18.7489 20.7466 19.3372 20.5016 20.0231 20.5C20.7089 20.4983 21.2977 20.7433 21.7893 21.235C22.281 21.7266 22.5256 22.315 22.5231 23C22.5206 23.685 22.276 24.2737 21.7893 24.7662C21.3027 25.2587 20.7139 25.5033 20.0231 25.5ZM5.27307 2.99998H23.7106C24.1897 2.99998 24.5543 3.21373 24.8043 3.64123C25.0543 4.06873 25.0647 4.50082 24.8356 4.93748L20.3981 12.9375C20.1689 13.3541 19.8618 13.6771 19.4768 13.9062C19.0918 14.1354 18.6697 14.25 18.2106 14.25H8.89807L7.52307 16.75H22.5231V19.25H7.52307C6.58557 19.25 5.87724 18.8387 5.39807 18.0162C4.9189 17.1937 4.89807 16.3758 5.33557 15.5625L7.02307 12.5L2.52307 2.99998H0.0230713V0.499983H4.08557L5.27307 2.99998Z"
          fill="#113096"
        />
      </svg>
    </section>
  );
};

export default ShoppingCart;

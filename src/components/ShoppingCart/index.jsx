import { useContext } from "react";
import { formatNumbers } from "../../utils/formatNumbers";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

import ShoppingCartProductDetail from "../ShoppingCartProductDetail";

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  const total = () => {
    return context.productInShoppingCart.reduce((accu, item) => {
      return accu + parseFloat(item.multiplication);
    }, 0);
  };

  return (
    <section
      className={`${
        context.showShoppingCart
          ? "fixed z-10 w-full h-full py-2xl bg-ferre_blue400/60 flex justify-end items-center"
          : "hidden"
      }`}
    >
      <div className="w-1/3 h-full flex flex-col bg-ferre_white rounded-l-xl">
        <div className="w-full mb-xs p-xs">
          <svg
            className="hover:opacity-60 hover:cursor-pointer"
            onClick={() =>
              context.setShowShoppingCart(!context.showShoppingCart)
            }
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
          >
            <path
              d="M1.40528 1.95879L14.7386 15.2921M14.7386 1.89844L1.40527 15.2318"
              stroke="#113096"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="w-full mb-xs text-center">
          <h1 className="text-xl">Carrito de compras</h1>
        </div>
        <hr className="border-ferre_blue400 " />
        <div className="w-full h-full p-md flex flex-col gap-md overflow-y-auto">
          {context.productInShoppingCart.map((items, index) => (
            <ShoppingCartProductDetail
              key={index}
              name={items.name}
              img={items.imgsrc}
              price={items.regularPrice}
              quantity={items.quantity}
              multiplication={items.multiplication}
            />
          ))}
        </div>
        <div className="w-full p-lg flex flex-col items-end gap-md">
          <div className="w-full flex gap-xs justify-between">
            <p className="text-xl font-semibold text-ferre_blue300">Total:</p>
            <p className="text-xl font-semibold text-ferre_blue300">
              <span>{formatNumbers(total())}</span>
            </p>
          </div>
          <button className="py-4xs px-xs text-white text-base bg-ferre_blue200 flex gap-4xs justify-center items-center rounded-lg hover:bg-ferre_blue300 active:bg-ferre_blue200  ">
            Procesar compra
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M4.98633 12L20.9863 12M20.9863 12L14.9863 18M20.9863 12L14.9863 6"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;

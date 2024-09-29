import { useContext } from "react";
import { NavLink } from "react-router-dom";

// Utils
import { formatNumbers } from "../../utils/formatNumbers";

// Contexts
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

// Components
import ShoppingCartProductDetail from "../ShoppingCartProductDetail";
import NextBtn from "../NextBtn";

const ShoppingCart = () => {
  const context = useContext(ShoppingCartContext);

  const total = () => {
    return context?.productInShoppingCart?.reduce((accu, item) => {
      return accu + parseFloat(item.multiplication);
    }, 0);
  };

  return (
    <section
      className={`${
        context?.showShoppingCart
          ? "fixed z-10 w-full h-full py-2xl bg-ferre_blue400/60 flex justify-end items-center"
          : "hidden"
      }`}
    >
      <div className="w-1/3 h-full flex flex-col bg-ferre_white rounded-l-xl">
        <div className="w-full mb-xs p-xs">
          <svg
            className="hover:opacity-60 hover:cursor-pointer"
            onClick={() =>
              context?.setShowShoppingCart(!context.showShoppingCart)
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
        {context.productInShoppingCart.length > 0 ? (
          <>
            <div className="w-full h-full p-md flex flex-col gap-md overflow-y-auto">
              {context?.productInShoppingCart?.map((items, index) => (
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
                <p className="text-xl font-semibold text-ferre_blue300">
                  Total:
                </p>
                <p className="text-xl font-semibold text-ferre_blue300">
                  <span>{formatNumbers(total())}</span>
                </p>
              </div>
              <NavLink
                onClick={() => {
                  context?.setShowShoppingCart(!context.showShoppingCart);
                  window.scrollTo(0, 0);
                }}
                className="w-full"
                to="/miorden"
              >
                <NextBtn text="Realizar pedido" />
              </NavLink>
            </div>
          </>
        ) : (
          <section className="w-full h-full mb-4xl flex flex-col gap-xs justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7.5 11L8.5 16"
                stroke="#154CFF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.03978 4.294C3.02509 4.20434 3.03511 4.11237 3.06876 4.02798C3.10242 3.94358 3.15843 3.86995 3.23078 3.815C3.92678 3.32 6.31378 2 11.9998 2C17.6858 2 20.0728 3.32 20.7688 3.815C20.8413 3.86984 20.8975 3.94341 20.9314 4.02782C20.9652 4.11222 20.9754 4.20425 20.9608 4.294L19.2608 17.038C19.1794 17.648 18.9585 18.2309 18.615 18.7415C18.2716 19.2521 17.815 19.6766 17.2808 19.982L16.9608 20.165C15.4499 21.0283 13.7399 21.4823 11.9998 21.4823C10.2597 21.4823 8.54966 21.0283 7.03878 20.165L6.71878 19.982C6.18453 19.6766 5.72794 19.2521 5.38452 18.7415C5.0411 18.2309 4.82013 17.648 4.73878 17.038L3.03978 4.294Z"
                stroke="#154CFF"
                stroke-width="1.5"
              />
              <path
                d="M3 5C5.571 7.667 18.429 7.667 21 5"
                stroke="#154CFF"
                stroke-width="1.5"
              />
            </svg>
            <p className="text-lg text-ferre_blue200">
              No hay productos en tu carrito
            </p>
          </section>
        )}
      </div>
    </section>
  );
};

export default ShoppingCart;

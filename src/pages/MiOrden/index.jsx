import { useContext } from "react";

// Utils
import { formatNumbers } from "../../utils/formatNumbers";

// Context
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

//Layouts
import Base from "../../layout/Base";

// Components
import NavBar from "../../components/NavBar";
import NextBtn from "../../components/NextBtn";
import MyOrderProductCard from "../../components/MyOrderProductCard";

const MiOrden = () => {
  const context = useContext(ShoppingCartContext);

  // Products Count

  const productsCount = () => {
    return context.productInShoppingCart.reduce((accu, items) => {
      return (accu += items?.quantity);
    }, 0);
  };

  // Subtotal

  const subtotal = () => {
    return context.productInShoppingCart.reduce((accu, items) => {
      return (accu += parseInt(items?.multiplication));
    }, 0);
  };

  return (
    <Base>
      <NavBar />
      <section className="w-full px-[128px]">
        <h1 className="text-2xl font-bold text-ferre_blue200">Mi orden</h1>
      </section>
      {context?.productInShoppingCart?.length > 0 ? (
        <section className="w-full h-full flex flex-col items-end justify-center">
          <section className="w-full h-full px-[224px] flex flex-col gap-xs">
            {context.productInShoppingCart.map((items, index) => (
              <MyOrderProductCard
                key={index}
                imgsrc={items.imgsrc}
                name={items.name}
                price={items.regularPrice}
                productQuantity={items.quantity}
              />
            ))}
          </section>
          <section className="mt-[64px] px-[224px] flex flex-col items-end">
            <div className="w-[460px] mb-xl text-lg flex flex-col gap-xs">
              <div className="flex justify-between">
                <h3 className="font-bold text-ferre_blue300">Artículos:</h3>
                <p className="text-ferre_blue300">{productsCount()}</p>
              </div>
              <div className="flex justify-between">
                <h3 className="font-bold text-ferre_blue300">Subtotal:</h3>
                <p className="text-ferre_blue300">
                  {formatNumbers(subtotal())}
                </p>
              </div>
              <div className="flex justify-between">
                <h3 className="font-bold text-ferre_blue300">Envío:</h3>
                <p className="text-ferre_blue300">DOP$ 120.00</p>
              </div>
              <hr />
              <div className="flex justify-between">
                <h3 className="font-bold text-ferre_blue300">Total:</h3>
                <p className="text-lg font-bold text-ferre_blue200">
                  {formatNumbers(subtotal() + 120)}
                </p>
              </div>
            </div>
            <NextBtn text="Pagar" />
          </section>
        </section>
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
          <p className="text-xl text-ferre_blue200">
            No hay productos en tu orden
          </p>
        </section>
      )}
    </Base>
  );
};

export default MiOrden;

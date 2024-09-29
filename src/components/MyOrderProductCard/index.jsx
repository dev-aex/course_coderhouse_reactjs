import { useState, useContext } from "react";

// utils
import { formatNumbers } from "../../utils/formatNumbers";

// Components
import QuantitySelector from "../QuantitySelector";

// Context
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const MyOrderProductCard = ({ imgsrc, name, price, productQuantity }) => {
  const [quantity, setQuantity] = useState(productQuantity);

  const addQuantity = () => {
    if (quantity < 9999) {
      context.newQuantity(name, 1);
      setQuantity(quantity + 1);
    }
  };

  const subtractQuantity = () => {
    if (quantity > 1) {
      context.newQuantity(name, -1);
      setQuantity(quantity - 1);
    }
  };

  // Context
  const context = useContext(ShoppingCartContext);

  // Delete Product
  const deleteProduct = () => {
    context.deleteProductCart(name);
  };

  // Loader
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div className="w-full grid grid-cols-6 gap-3xl items-center">
        <div className="w-fit col-span-1">
          <svg
            className="hover:opacity-60 hover:cursor-pointer"
            onClick={() => deleteProduct()}
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
        <div className="w-fit col-span-1">
          <figure className="flex justify-center items-center">
            {isLoading ? (
              <div className="loader place-content-center"></div>
            ) : (
              <></>
            )}
            <img
              className={`${isLoading ? "hidden" : "w-3xl h-auto"}`}
              src={imgsrc}
              alt={name}
              onLoad={() => setIsLoading(false)}
            />
          </figure>
        </div>
        <div>
          <p className="flex flex-col gap-xs text-base font-bold text-ferre_blue300">
            {name}
            <span className="text-base font-medium text-ferre_blue200">
              {formatNumbers(price)}
            </span>
          </p>
        </div>
        <div className="w-full col-span-1">
          <QuantitySelector
            addQuantity={addQuantity}
            subtractQuantity={subtractQuantity}
            quantity={quantity}
          />
        </div>
        <div className="w-full col-span-2">
          <h3 className="text-xl text-right">
            {formatNumbers(price * quantity)}
          </h3>
        </div>
      </div>
      <hr className="w-full border-ferre_blue20" />
    </>
  );
};

export default MyOrderProductCard;

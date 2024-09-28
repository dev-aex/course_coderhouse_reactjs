import { useState } from "react";

// utils
import { formatNumbers } from "../../utils/formatNumbers";

// Components
import QuantitySelector from "../QuantitySelector";

const MyOrderProductCard = ({ imgsrc, name, price, productQuantity }) => {
  const [quantity, setQuantity] = useState(productQuantity);

  const addQuantity = () => {
    if (quantity < 9999) {
      setQuantity(quantity + 1);
    }
  };

  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="w-full grid grid-cols-6 gap-3xl items-center">
        <div className="w-fit col-span-1">
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
        <div className="w-fit col-span-1">
          <figure>
            <img className="w-3xl h-auto" src={imgsrc} alt={name} />
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

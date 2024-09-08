import { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

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
    <div className="w-full h-full flex gap-4xs justify-center items-center">
      <button
        onClick={subtractQuantity}
        className="w-[2.2rem] h-[2.2rem] bg-ferre_blue300 rounded-full flex justify-center items-center hover:bg-ferre_blue400 active:bg-ferre_blue200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="4"
          viewBox="0 0 12 4"
          fill="none"
        >
          <path
            d="M11.9349 3.89478H0.734863V1.89478H11.9349V3.89478Z"
            fill="#F6F6F7"
          />
        </svg>
      </button>
      <input
        type="text"
        value={quantity}
        className="w-[4rem] h-[3rem] px-[0.2rem] py-4xs border border-ferre_blue500 border-2 rounded-lg text-center font-bold text-ferre_blue400"
      />
      <button
        onClick={addQuantity}
        className="w-[2.2rem] h-[2.2rem] bg-ferre_blue300 rounded-full flex justify-center items-center hover:bg-ferre_blue400 active:bg-ferre_blue200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
        >
          <g clip-path="url(#clip0_149_161)">
            <path
              d="M11.5347 7.59507H6.73472V12.3951H5.13472V7.59507H0.334717V5.99507H5.13472V1.19507H6.73472V5.99507H11.5347V7.59507Z"
              fill="#F6F6F7"
            />
          </g>
          <defs>
            <clipPath id="clip0_149_161">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="translate(0 0.396729)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector;

import { useContext } from "react";

// Utils
import { formatNumbers } from "../../utils/formatNumbers";

// Contexts
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

const ShoppingCartProductDetail = ({
  name,
  img,
  price,
  quantity,
  multiplication,
}) => {
  const context = useContext(ShoppingCartContext);

  // Delete product
  const deleteProduct = () => {
    context.deleteProductCart(name);
  };

  return (
    <article className="w-full h-fit flex gap-xs">
      <div className="w-full flex gap-xs items-center justify-start">
        <div
          onClick={() => deleteProduct()}
          className="w-[24px] h-[24px] flex justify-center items-center bg-ferre_blue20 rounded-full hover:bg-ferre_blue200 active:bg-ferre_blue400 hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M1.48633 1.46324L11.4863 11.4632M11.4863 1.41797L1.48633 11.418"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </div>
        <figure className="w-[6rem] h-auto object-cover">
          <img className="w-full h-full" src={img} alt={name} />
        </figure>
        <h4 className="max-w-md text-base text-ferre_blue400">{name}</h4>
      </div>
      <div className="w-fit h-full text-base">
        <p className="text-ferre_blue500 whitespace-nowrap">
          {formatNumbers(price)}
        </p>
        <p className="text-ferre_blue500 whitespace-nowrap">x{quantity}</p>
        <p className="font-bold text-ferre_blue300 whitespace-nowrap">
          {formatNumbers(multiplication)}
        </p>
      </div>
    </article>
  );
};

export default ShoppingCartProductDetail;

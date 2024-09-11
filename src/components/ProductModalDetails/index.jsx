import { useContext } from "react";
import AddCartBtn from "../AddCartBtn";
import QuantitySelector from "../QuantitySelector";
import { ProductDetailContext } from "../../context/ProductDetailContext";

const ProductModalDetails = () => {
  const context = useContext(ProductDetailContext);

  return (
    <article
      className={`${
        context.isProductDetailOpen
          ? "fixed z-10 w-screen h-screen bg-ferre_blue400/80"
          : "hidden"
      }`}
    >
      <div className="p-2xs w-screen h-screen flex justify-center items-center">
        <div className="relative max-w-[80rem] h-fit bg-ferre_white grid grid-cols-2 rounded-xl">
          <button
            onClick={() => context.closeProductDetail()}
            className="absolute z-10 right-xs top-xs hover:opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M0.918953 1.95928L14.2523 15.2926M14.2523 1.89893L0.918945 15.2323"
                stroke="#081850"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          <div className="w-full h-full">
            <figure className="w-full h-full flex justify-center items-center p-md">
              <img
                className="w-full h-full object-contain rounded-xl"
                src={context.productToShow.imgsrc}
                alt={context.productToShow.name}
              />
            </figure>
          </div>
          <div className="w-full h-full flex flex-col p-lg place-content-between">
            <div className="mt-md mb-md flex flex-col place-content-between">
              <h4 className="mb-md font-bold text-xl text-ferre_blue300">
                {context.productToShow.name}
              </h4>
              <p className="mb-xl font-medium text-lg text-ferre_blue400">
                {context.productToShow.description}
              </p>
              <p className="text-xl font-bold text-ferre_blue200">
                {context.productToShow.regularPrice}
              </p>
            </div>
            <div className="mb-md flex items-center justify-between">
              <QuantitySelector />
              <AddCartBtn />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductModalDetails;

import { useContext } from "react";
import AddCartBtn from "../AddCartBtn";
import QuantitySelector from "../QuantitySelector";
import { ProductDetailContext } from "../../Context";

const CardProduct = ({ imgsrc, name, regularPrice, description }) => {
  const context = useContext(ProductDetailContext);

  const showProduct = () => {
    const productInfo = { imgsrc, name, regularPrice, description };
    context.openProductDetail();
    context.setProductToShow(productInfo);
  };

  return (
    <article className="w-full h-[36.5rem] grid grid-rows-2 bg-white shadow-lg shadow-ferre_blue400/25 shadow-xs shadow-ferre_blue400/50 rounded-xl">
      <figure
        onClick={showProduct}
        className="w-full h-full mb-4xs cursor-pointer"
      >
        <img
          className="w-full h-full object-contain rounded-t-lg"
          src={imgsrc}
          alt={name}
        />
      </figure>
      <section className="w-full h-full">
        <div className="w-full h-[11.6rem] mb-xs px-xs flex flex-col justify-between place-content-between items-start">
          <h4
            onClick={showProduct}
            className="w-full h-full mb-4xs pt-4xs text-lg font-bold text-ferre_blue400 cursor-pointer"
          >
            {name}
          </h4>
          <p className="w-full h-full">
            <span className="text-lg font-bold text-ferre_blue200">
              {regularPrice}
            </span>
          </p>
        </div>
        <div className="w-full flex px-xs justify-between items-center">
          <QuantitySelector />
          <AddCartBtn />
        </div>
      </section>
    </article>
  );
};

export default CardProduct;

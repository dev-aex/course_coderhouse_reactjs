import { useContext } from "react";
import AddCartBtn from "../AddCartBtn";
import QuantitySelector from "../QuantitySelector";
import { ProductDetailContext } from "../../Context";

const CardSale = ({ imgsrc, name, regularPrice, salePrice, description }) => {
  const context = useContext(ProductDetailContext);

  const showProduct = () => {
    const productInfo = { imgsrc, name, regularPrice, description };
    context.openProductDetail();
    context.setProductToShow(productInfo);
  };

  return (
    <article className="w-[24.7rem] h-[36.5rem]] bg-white shadow-lg shadow-ferre_blue400/25 shadow-xs shadow-ferre_blue400/50 rounded-xl">
      <figure onClick={showProduct} className="w-full h-[12.6rem] mb-4xs cursor-pointer hover:opacity-50">
        <img
          className="w-full h-full object-contain rounded-t-lg"
          src={imgsrc}
          alt={name}
        />
      </figure>
      <section className="w-full h-full">
        <div className="w-full h-[11.6rem] mb-xs px-xs flex flex-col justify-between place-content-between items-start">
          <h4 onClick={showProduct} className="w-full h-full mb-4xs pt-4xs text-md font-bold text-ferre_blue400 cursor-pointer hover:text-ferre_blue100">
            {name}
          </h4>
          <p className="w-full h-full flex flex-col">
            <span className="text-sm font-semibold text-ferre_blue50 line-through">
              {regularPrice}
            </span>
            <span className="text-lg font-bold text-ferre_red">
              {salePrice}
            </span>
          </p>
        </div>
        <div className="px-xs pb-xs flex gap-3xs justify-center items-center">
          <QuantitySelector />
          <AddCartBtn />
        </div>
      </section>
    </article>
  );
};

export default CardSale;

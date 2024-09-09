import { useContext } from "react";
import { ProductDetailContext } from "../../Context";

const cardNew = ({ imgsrc, name, regularPrice, description }) => {
  const context = useContext(ProductDetailContext);

  const showProduct = () => {
    const productInfo = { imgsrc, name, regularPrice, description };
    context.openProductDetail();
    context.setProductToShow(productInfo);
  };


  return (
    <article className="w-[24.7rem] h-[20rem] bg-white shadow-lg shadow-ferre_blue400/25 shadow-xs shadow-ferre_blue400/50 rounded-xl">
      <figure onClick={showProduct} className="w-full h-[12.6rem] mb-4xs cursor-pointer">
        <img
          className="w-full h-full object-contain rounded-t-lg"
          src={imgsrc}
          alt={name}
        />
      </figure>
      <section className="w-full h-full">
        <div className="w-full h-[11.6rem] mb-xs px-xs flex flex-col justify-between place-content-between items-start">
          <h4 onClick={showProduct} className="w-full h-full mb-4xs pt-4xs text-md font-bold text-ferre_blue400 cursor-pointer">
            {name}
          </h4>
        </div>
      </section>
    </article>
  );
};

export default cardNew;

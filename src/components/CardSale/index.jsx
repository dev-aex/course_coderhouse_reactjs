import AddCartBtn from "../AddCartBtn";
import QuantitySelector from "../QuantitySelector";

const CardSale = ({ imgsrc, name, regularPrice, salePrice }) => {
  console.log(imgsrc)
  return (
    <div className="w-[24.7rem] h-[36.5rem]] bg-white shadow-lg shadow-ferre_blue400/25 shadow-xs shadow-ferre_blue400/50 rounded-xl">
      <figure className="w-full h-[12.6rem] mb-4xs">
        <img className="w-full h-full object-contain rounded-t-lg" src={imgsrc} alt={name} />
      </figure>
      <section className="w-full h-full">
        <div className="w-full h-[11.6rem] mb-xs px-xs flex flex-col justify-between place-content-between items-start">
          <h4 className="w-full h-full mb-4xs pt-4xs text-md font-bold text-ferre_blue400">
            {name}
          </h4>{" "}
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
    </div>
  );
};

export default CardSale;

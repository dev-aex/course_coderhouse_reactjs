const ShoppingCartProductDetail = ({ name, img, price, quantity }) => {
  return (
    <article className="w-full flex gap-xs justify-center items-center">
      <div className="w-[24px] h-[24px] flex justify-center items-center bg-ferre_blue20 rounded-full">
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
      <figure className="w-[6rem] h-[6rem] object-cover">
        <img className="w-full h-full" src={img} alt={name} />
      </figure>
      <h4 className="max-w-md text-base text-ferre_blue400">{name}</h4>
      <div className="text-base">
        <p className="text-ferre_blue500">DOP$ {price}</p>
        <p className="text-ferre_blue500">x{quantity}</p>
        <p className="font-bold text-ferre_blue300">{price * quantity}</p>
      </div>
    </article>
  );
};

export default ShoppingCartProductDetail;

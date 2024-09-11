const CardProductSkeleton = () => {
  return (
    <article className="w-full h-full grid grid-rows-2 bg-white shadow-lg shadow-ferre_blue400/25 rounded-xl">
      <figure className="w-full h-full">
        <div className="w-full h-full bg-ferre_blue20 rounded-t-lg"></div>
      </figure>
        <div className="w-full h-full flex flex-col justify-between place-content-between">
          <div className="w-full h-full px-xs mt-xs flex flex-col gap-2xs">
            <div className="w-full h-[2rem] bg-ferre_blue20 rounded-lg"></div>
            <div className="w-full h-[2rem] bg-ferre_blue20 rounded-lg"></div>
          </div>

          <div className="w-full h-full px-2xs flex gap-md justify-center items-center items">
            <div className="w-full h-[4rem] bg-ferre_blue20 rounded-lg"></div>
            <div className="w-full h-[4rem] bg-ferre_blue20 rounded-lg"></div>
          </div>
        </div>
    </article>
  );
};

export default CardProductSkeleton;

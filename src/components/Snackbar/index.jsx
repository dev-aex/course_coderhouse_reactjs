const Snackbar = () => {
  return (
    <div className="fixed z-20 top-xl left-xl w-[300px] h-[80px] flex gap-xs justify-center items-center text-ferre_blue300 font-bold text-base rounded-lg bg-ferre_white border-2 border-ferre_blue50 shadow-lg shadow-xl">
      <div className="w-[30px] h-[30px] bg-[#00AD34] rounded-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
        >
          <path
            d="M6.29448 13.8582L0 7.56377L1.57362 5.99014L6.29448 10.711L16.4264 0.579102L18 2.15272L6.29448 13.8582Z"
            fill="white"
          />
        </svg>
      </div>
      <h1>Se agregó al carrito</h1>
    </div>
  );
};

export default Snackbar;

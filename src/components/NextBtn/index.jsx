const NextBtn = ({ text }) => {
  return (
    <button className="w-full py-4xs px-xs text-white text-base bg-ferre_blue200 flex gap-4xs justify-center items-center rounded-lg hover:bg-ferre_blue300 active:bg-ferre_blue200  ">
      {text}
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M4.98633 12L20.9863 12M20.9863 12L14.9863 18M20.9863 12L14.9863 6"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>
  );
};

export default NextBtn;

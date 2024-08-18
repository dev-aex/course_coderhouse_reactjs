const SearchBar = () => (
  <label className="relative block">
    <span className="absolute left-xs top-[25%]">
      <svg
        width="17"
        height="18"
        viewBox="0 0 17 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1.01154"
          y="1.82767"
          width="10.5533"
          height="10.5533"
          rx="3"
          stroke="#113096"
          stroke-width="2"
        />
        <line
          x1="10.6731"
          y1="11.2675"
          x2="15.8708"
          y2="16.4652"
          stroke="#113096"
          stroke-width="2"
        />
      </svg>
    </span>
    <input
      className="w-[416px] h-[36px] text-base px-xl placeholder:text-primario-50 bg-primario-20 rounded-lg focus:ring-primario-400 focus:ring-2"
      placeholder="Busca en todo FerreYá"
      type="text"
      name="search"
    />
  </label>
);

export default SearchBar;

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { SearchBarContext } from "../../context/SearchBarContext";

const SearchBar = () => {
  const context = useContext(SearchBarContext);
  const navigate = useNavigate();

  const enterKey = (event) => {
    if (event.key === "Enter") {
      context?.setSearchword(event.target.value);
      window.scrollTo(0, 0);
      navigate("/search");
    }
  };

  return (
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
        className="w-[416px] h-[44px] text-base px-xl placeholder:text-primario-50 bg-ferre_white rounded-lg border-2 border-ferre_blue50"
        placeholder="Busca en todo FerreYá"
        type="text"
        name="search"
        onChange={(e) => context?.setSearchword(e.target.value)}
        onKeyDown={(e) => enterKey(e)}
      />
    </label>
  );
};
export default SearchBar;

import { useState } from "react";

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <section>
      <button onClick={previousSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="14"
          viewBox="0 0 10 14"
          fill="none"
        >
          <path
            d="M10 13.416V10.916L2.5 7.16602V6.91602L10 3.16602V0.666016L-1.3113e-07 5.66602V8.41602L10 13.416Z"
            fill="#081850"
          />
        </svg>
      </button>
      <div className="w-full h-[320px] rounded-md flex">
        {data.map((item, index) => {
          return (
            <img
              key={index}
              src={item.url}
              alt={item.alt}
              className={
                slide === index ? "w-auto h-auto inline-block" : "hidden"
              }
            />
          );
        })}
      </div>
      <button onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="14"
          viewBox="0 0 11 14"
          fill="none"
        >
          <path
            d="M0.163086 13.416V10.916L7.66309 7.16602V6.91602L0.163086 3.16602V0.666016L10.1631 5.66602V8.41602L0.163086 13.416Z"
            fill="#081850"
          />
        </svg>
      </button>
      <span>
        {data.map((_, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                setSlide(index);
              }}
              className={
                slide === index
                  ? "w-xs h-xs bg-primario-400 rounded-3xl"
                  : "w-xs h-xs bg-primario-50 rounded-3xl"
              }
            ></button>
          );
        })}
      </span>
    </section>
  );
};

export default Slider;

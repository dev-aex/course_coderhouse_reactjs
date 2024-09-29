import { useState, useEffect } from "react";

const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  // Next
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  // Previous
  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  // timer
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slide]);

  // Loader
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section
      className={`${
        isLoading
          ? "w-full h-[320px] bg-[#E8EDFF] rounded-lg"
          : "w-full h-[320px] relative rounded-lg"
      }`}
    >
      {isLoading ? (
        <></>
      ) : (
        <button className="absolute top-1/2 left-xs" onClick={previousSlide}>
          <div className="w-xl h-xl flex items-center justify-center rounded-full bg-ferre_white/30 hover:bg-white/60 active:bg-ferre_blue200/30">
            <svg
              className="-rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M19.5384 15.8793L15.7884 15.8793L10.1634 4.62927L9.78838 4.62927L4.16338 15.8793L0.413376 15.8793L7.91338 0.879272L12.0384 0.879272L19.5384 15.8793Z"
                fill="#113096"
              />
            </svg>
          </div>
        </button>
      )}

      <div className="rounded-md flex">
        {isLoading ? (
          <div className="loader absolute top-1/2 right-1/2"></div>
        ) : (
          <></>
        )}
        {data.map((item, index) => {
          return (
            <img
              key={index}
              src={item.url}
              alt={item.alt}
              onLoad={() => setIsLoading(false)}
              className={`
                ${isLoading ? "hidden" : ""}
                ${
                  slide === index
                    ? " w-full h-[320px] inline-block rounded-3xl object-cover"
                    : "hidden"
                }
            `}
            />
          );
        })}
      </div>
      {isLoading ? (
        <></>
      ) : (
        <button className="absolute top-1/2 right-xs" onClick={nextSlide}>
          <div className="w-xl h-xl flex items-center justify-center rounded-full bg-ferre_white/30 hover:bg-white/60 active:bg-ferre_blue200/30">
            <svg
              className="rotate-90"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M19.5384 15.8793L15.7884 15.8793L10.1634 4.62927L9.78838 4.62927L4.16338 15.8793L0.413376 15.8793L7.91338 0.879272L12.0384 0.879272L19.5384 15.8793Z"
                fill="#113096"
              />
            </svg>
          </div>
        </button>
      )}

      {isLoading ? (
        <></>
      ) : (
        <span className="flex gap-2xs absolute bottom-xs left-1/2">
          {data.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  setSlide(index);
                }}
                className={
                  slide === index
                    ? "w-xs h-xs bg-ferre_blue500 rounded-3xl"
                    : "w-xs h-xs bg-white rounded-3xl"
                }
              ></button>
            );
          })}
        </span>
      )}
    </section>
  );
};

export default Slider;

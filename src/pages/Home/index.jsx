import { useState, useEffect } from "react";
import Slider from "../../components/Slider";
import CarrouselContainer from "../../Containers/CarrouselContainer";
import Sales from "../../components/Sales";
import New from "../../components/New";

import { slides } from "../../Data/slider.json";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Slider data={slides} />
      <CarrouselContainer title={"Ofertas"}>
        <Sales data={products} />
      </CarrouselContainer>
      <CarrouselContainer title={"Novedades"}>
      <New data={products}/>
      </CarrouselContainer>
    </>
  );
};

export default Home;

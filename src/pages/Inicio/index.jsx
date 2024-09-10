import { useState, useEffect } from "react";
import Slider from "../../Components/Slider";
import CarrouselContainer from "../../Containers/CarrouselContainer";
import Sales from "../../Components/Sales";
import New from "../../Components/New";
import Base from "../../Layout/Base";

import Navbar from "../../Components/NavBar";

import { slides } from "../../Data/slider.json";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Base>
      <Navbar inicio={true} />
      <Slider data={slides} />
      <CarrouselContainer title={"Ofertas"}>
        <Sales data={products} />
      </CarrouselContainer>
      <CarrouselContainer title={"Novedades"}>
        <New data={products} />
      </CarrouselContainer>
    </Base>
  );
};

export default Home;

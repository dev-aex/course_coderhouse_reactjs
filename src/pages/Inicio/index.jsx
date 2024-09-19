import Slider from "../../components/Slider";
import CarrouselContainer from "../../containers/CarrouselContainer";
import Sales from "../../components/Sales";
import New from "../../components/New";
import Base from "../../layout/Base";

import Navbar from "../../components/NavBar";

import { slides } from "../../data/slider.json";

const Home = ({ data }) => {
  return (
    <Base>
      <Navbar inicio={true} />
      <Slider data={slides} />
      <CarrouselContainer title={"Ofertas"}>
        <Sales data={data} />
      </CarrouselContainer>
      <CarrouselContainer title={"Novedades"}>
        <New data={data} />
      </CarrouselContainer>
    </Base>
  );
};

export default Home;

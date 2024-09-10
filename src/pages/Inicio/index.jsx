import Slider from "../../Components/Slider";
import CarrouselContainer from "../../Containers/CarrouselContainer";
import Sales from "../../Components/Sales";
import New from "../../Components/New";
import Base from "../../Layout/Base";

import Navbar from "../../Components/NavBar";

import { slides } from "../../Data/slider.json";

const Home = ({data}) => {

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

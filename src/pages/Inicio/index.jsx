// Layout
import Base from "../../layout/Base";

// Containers
import HomeProductsContainer from "../../containers/HomeProductsContainer";

// Components
import Navbar from "../../components/NavBar";
import Sales from "../../components/Sales";
import New from "../../components/New";
import Slider from "../../components/Slider";

import { slides } from "../../data/slider.json";

const Home = ({ data }) => {
  return (
    <Base>
      <Navbar inicio={true} />
      <Slider data={slides} />
      <HomeProductsContainer title={"Ofertas"}>
        <Sales data={data} />
      </HomeProductsContainer>
      <HomeProductsContainer title={"Novedades"}>
        <New data={data} />
      </HomeProductsContainer>
    </Base>
  );
};

export default Home;

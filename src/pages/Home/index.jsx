import Slider from "../../components/Slider";
import Sale from "../../components/Sale";
import New from "../../components/New";

import { slides } from "../../data/slider.json";
import products from "../../data/products.json";

const Home = () => {
  return (
    <>
      <Slider data={slides} />
      <Sale data={products} />
      <New />
    </>
  );
};

export default Home;

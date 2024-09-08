import Base from "./layout/Base";
import Slider from "./components/Slider";
import Deals from "./components/Deals";
import New from "./components/New";

import { slides } from "./data/slider.json";
import products from "./data/products.json";


function App() {
  return (
    <Base>
      <Slider data={slides} />
      <Deals data={products} />
      <New />
    </Base>
  );
}

export default App;

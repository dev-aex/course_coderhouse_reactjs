import Base from "./layout/Base";
import Slider from "./components/Slider";
import Deals from "./components/Deals";
import New from "./components/New";

function App() {
  return (
    <Base>
      <Slider />
      <Deals />
      <New />
    </Base>
  );
}

export default App;

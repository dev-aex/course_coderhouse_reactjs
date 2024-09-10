import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Inicio from "./Pages/Inicio";
import Construccion from "./Pages/Construccion";
import Herramientas from "./Pages/Herramientas";
import Herreria from "./Pages/Herreria";
import Plomeria from "./Pages/Plomeria";
import Pintura from "./Pages/Pintura";
import NotFound from "./Pages/NotFound";

import { ProductDetailProvider } from "./Context/ProductDetailContext";
import ProductModalDetails from "./Components/ProductModalDetails";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ProductDetailProvider>
      <ProductModalDetails />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio data={data} />} />
          <Route
            exact
            path="/construccion"
            element={<Construccion data={data} />}
          />
          <Route
            exact
            path="/herramientas"
            element={<Herramientas data={data} />}
          />
          <Route exact path="/herreria" element={<Herreria data={data} />} />
          <Route exact path="/plomeria" element={<Plomeria data={data} />} />
          <Route exact path="/pintura" element={<Pintura data={data} />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ProductDetailProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Inicio from "./pages/Inicio";
import Construccion from "./pages/Construccion";
import Herramientas from "./pages/Herramientas";
import Herreria from "./pages/Herreria";
import Plomeria from "./pages/Plomeria";
import Pintura from "./pages/Pintura";
import NotFound from "./pages/NotFound";

import { ProductDetailProvider } from "./context/ProductDetailContext";
import ProductModalDetails from "./components/ProductModalDetails";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/products.json")
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

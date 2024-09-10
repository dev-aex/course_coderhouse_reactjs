import { BrowserRouter, Routes, Route } from "react-router-dom";

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
  return (
    <ProductDetailProvider>
      <ProductModalDetails />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/construccion" element={<Construccion />} />
          <Route exact path="/herramientas" element={<Herramientas />} />
          <Route exact path="/herreria" element={<Herreria />} />
          <Route exact path="/plomeria" element={<Plomeria />} />
          <Route exact path="/pintura" element={<Pintura />} />
          <Route exact path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ProductDetailProvider>
  );
}

export default App;

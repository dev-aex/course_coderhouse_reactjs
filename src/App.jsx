import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";

// Contexts
import { GlobalContext } from "./context/GlobalContext";

// Pages
import Inicio from "./pages/Inicio";
import Construccion from "./pages/Construccion";
import Herramientas from "./pages/Herramientas";
import Herreria from "./pages/Herreria";
import Plomeria from "./pages/Plomeria";
import Pintura from "./pages/Pintura";
import NotFound from "./pages/NotFound";

// Components
import ShoppingCart from "./components/ShoppingCart";
import ProductModalDetails from "./components/ProductModalDetails";

// Providers
import { ProductDetailProvider } from "./context/ProductDetailContext";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

function App() {
  const globalContext = useContext(GlobalContext);

  return (
    <ShoppingCartContextProvider>
      <ProductDetailProvider>
        <ShoppingCart />
        <ProductModalDetails />
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Inicio data={globalContext?.data} />}
            />
            <Route
              exact
              path="/construccion"
              element={<Construccion data={globalContext?.data} />}
            />
            <Route
              exact
              path="/herramientas"
              element={<Herramientas data={globalContext?.data} />}
            />
            <Route
              exact
              path="/herreria"
              element={<Herreria data={globalContext?.data} />}
            />
            <Route
              exact
              path="/plomeria"
              element={<Plomeria data={globalContext?.data} />}
            />
            <Route
              exact
              path="/pintura"
              element={<Pintura data={globalContext?.data} />}
            />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductDetailProvider>
    </ShoppingCartContextProvider>
  );
}

export default App;

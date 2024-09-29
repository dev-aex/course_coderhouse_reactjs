import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

// Contexts
import { GlobalContext } from "./context/GlobalContext";
import { SearchBarContext } from "./context/SearchBarContext";

// Pages
import Inicio from "./pages/Inicio";
import Construccion from "./pages/Construccion";
import Herramientas from "./pages/Herramientas";
import Herreria from "./pages/Herreria";
import Plomeria from "./pages/Plomeria";
import Pintura from "./pages/Pintura";
import NotFound from "./pages/NotFound";
import MiOrden from "./pages/MiOrden";
import SearchProducts from "./pages/SearchProducts";

// Components
import ShoppingCart from "./components/ShoppingCart";
import ProductModalDetails from "./components/ProductModalDetails";
import Snackbar from "./components/Snackbar";

// Providers
import { ProductDetailProvider } from "./context/ProductDetailContext";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext";

function App() {
  const globalContext = useContext(GlobalContext);
  const searchBarContext = useContext(SearchBarContext);

  const [searchingword, setSearchingword] = useState("");

  useEffect(() => {
    setSearchingword(searchBarContext.searchword);
  }, [searchBarContext.searchword]);

  return (
    <ShoppingCartContextProvider>
      <ProductDetailProvider>
        <BrowserRouter>
          {globalContext?.showSnackbar ? <Snackbar /> : <></>}
          <ShoppingCart />
          <ProductModalDetails />
          <Routes>
            <Route
              exact
              path="/search"
              element={
                <SearchProducts
                  data={globalContext?.data}
                  searchword={searchingword}
                />
              }
            />
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
            <Route exact path="/miorden" element={<MiOrden />} />
            <Route exact path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProductDetailProvider>
    </ShoppingCartContextProvider>
  );
}

export default App;

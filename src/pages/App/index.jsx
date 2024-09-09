import { useRoutes, BrowserRouter } from "react-router-dom";


import Home from "../Home";
import Construccion from "../Construccion";
import Herramientas from "../Herramientas";
import Herreria from "../Herreria";
import Plomeria from "../Plomeria";
import Pintura from "../Pintura";
import NotFound from "../NotFound";


const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/construccion",
      element: <Construccion />,
    },
    {
      path: "/herramientas",
      element: <Herramientas />,
    },
    {
      path: "/herreria",
      element: <Herreria />,
    },
    {
      path: "/plomeria",
      element: <Plomeria />,
    },
    {
      path: "/pintura",
      element: <Pintura />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <BrowserRouter>
        {/* <Navbar /> */}
        <AppRoutes />
    </BrowserRouter>
  );
}

export default App;

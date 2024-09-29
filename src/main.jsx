import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Providers
import { GlobalContextProvider } from "./context/GlobalContext";
import { SearchBarContextProvider } from "./context/SearchBarContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <SearchBarContextProvider>
        <App />
      </SearchBarContextProvider>
    </GlobalContextProvider>
  </StrictMode>
);

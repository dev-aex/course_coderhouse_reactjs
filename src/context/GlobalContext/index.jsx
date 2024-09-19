import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  // Fetching data
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/src/data/products.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        data,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

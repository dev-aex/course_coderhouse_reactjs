import { createContext, useState } from "react";

export const SearchBarContext = createContext();

export const SearchBarContextProvider = ({ children }) => {
  const [searchword, setSearchword] = useState("");

  return (
    <SearchBarContext.Provider
      value={{
        searchword,
        setSearchword,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};

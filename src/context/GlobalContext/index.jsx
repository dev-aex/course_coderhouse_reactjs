import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

  // Fetching data
  const [data, setData] = useState([]);

  // Fetching Firebase
  useEffect(() => {
    const productsCollection = collection(db, "productos");

    getDocs(productsCollection)
      .then((snapshot) => {
        if (snapshot) {
          setData(
            snapshot?.docs.map((product) => ({
              id: product?.id,
              ...product?.data(),
            }))
          );
        }
      })
      .catch((error) => console.error("Error fetching firebase data: ", error));
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

import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

// Database
import { db } from "../../config/firebase.config";

// Create context
export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  // Show Snackbar
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [showSnackbar]);

  // Fetching Firebase
  const [data, setData] = useState([]);

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
        showSnackbar,
        setShowSnackbar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

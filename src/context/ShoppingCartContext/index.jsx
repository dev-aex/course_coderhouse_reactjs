import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({ children }) => {
  // Show Shopping Cart
  const [showShoppingCart, setShowShoppingCart] = useState(false);
  // Products on Cart
  const [productInShoppingCart, setProductInShoppingCart] = useState([]);
  // Quantity of products
  const [quantityProducts, setQuantityProducts] = useState(0);

  useEffect(() => {
    setQuantityProducts(productInShoppingCart.length);
  }, [productInShoppingCart]);

  return (
    <ShoppingCartContext.Provider
      value={{
        productInShoppingCart,
        setProductInShoppingCart,
        showShoppingCart,
        setShowShoppingCart,
        quantityProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

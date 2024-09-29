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
    const allProductsQuantity = productInShoppingCart.reduce(
      (accu, products) => {
        return (accu += products.quantity);
      },
      0
    );

    setQuantityProducts(allProductsQuantity);
  }, [productInShoppingCart]);

  // Delete product
  const deleteProductCart = (productName) => {
    const indexToDelete = productInShoppingCart.findIndex(
      (product) => product.name === productName
    );

    const updatedProducts = [...productInShoppingCart];

    updatedProducts.splice(indexToDelete, 1);

    setProductInShoppingCart(updatedProducts);
  };

  // Update Quantity
  const newQuantity = (productName, newQuantity) => {
    const actualProducts = [...productInShoppingCart];

    actualProducts.map((product) => {
      if (productName === product.name) {
        const quantitySum = (product.quantity += newQuantity);
        product.multiplication = product.regularPrice * quantitySum;
      }
    });

    setProductInShoppingCart(actualProducts);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        productInShoppingCart,
        setProductInShoppingCart,
        showShoppingCart,
        setShowShoppingCart,
        quantityProducts,
        deleteProductCart,
        newQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

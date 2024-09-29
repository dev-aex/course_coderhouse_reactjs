import { useContext, useState } from "react";

//Context
import { ProductDetailContext } from "../../context/ProductDetailContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { GlobalContext } from "../../context/GlobalContext";

// Components
import AddCartBtn from "../AddCartBtn";
import QuantitySelector from "../QuantitySelector";

const ProductModalDetails = () => {
  // Using contexts
  const detailContext = useContext(ProductDetailContext);
  const cartContext = useContext(ShoppingCartContext);
  const globalContext = useContext(GlobalContext);

  // Add to cart
  const addProductToCart = () => {
    const multiplication = detailContext?.productToShow.regularPrice * quantity;

    const productData = {
      imgsrc: detailContext?.productToShow.imgsrc,
      name: detailContext?.productToShow.name,
      regularPrice: detailContext?.productToShow.regularPrice,
      quantity: quantity,
      multiplication: multiplication.toFixed(2),
    };

    const alreadyExist = cartContext?.productInShoppingCart.find(
      (product) => productData.name == product.name
    );

    if (alreadyExist) {
      cartContext.newQuantity(productData.name, quantity);
    } else {
      cartContext?.setProductInShoppingCart([
        ...cartContext.productInShoppingCart,
        productData,
      ]);
    }
    globalContext.setShowSnackbar(true);
  };

  //Quantity
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    if (quantity < 9999) {
      setQuantity(quantity + 1);
    }
  };

  const subtractQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //Close Product Detail
  const closeProductDetail = () => {
    detailContext?.closeProductDetail();
    setQuantity(1);
  };

  // Loader
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article
      className={`${
        detailContext?.isProductDetailOpen
          ? "fixed z-10 w-screen h-screen bg-ferre_blue400/80"
          : "hidden"
      }`}
    >
      <div className="w-screen h-screen p-2xs flex justify-center items-center">
        <div className="relative max-w-[80rem] h-fit bg-ferre_white grid grid-cols-2 rounded-xl">
          <button
            onClick={closeProductDetail}
            className="absolute z-10 right-xs top-xs hover:opacity-60"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M0.918953 1.95928L14.2523 15.2926M14.2523 1.89893L0.918945 15.2323"
                stroke="#081850"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <div className="w-full h-full">
            <figure className="w-full h-full flex justify-center items-center p-md">
              {isLoading ? <div className="loader"></div> : <></>}
              <img
                className={`${
                  isLoading
                    ? "hidden"
                    : "w-full h-full object-contain rounded-xl"
                }`}
                src={detailContext?.productToShow.imgsrc}
                alt={detailContext?.productToShow.name}
                onLoad={() => setIsLoading(false)}
              />
            </figure>
          </div>
          <div className="w-full h-full flex flex-col p-lg place-content-between">
            <div className="mt-md mb-md flex flex-col place-content-between">
              <h4 className="mb-md font-bold text-xl text-ferre_blue300">
                {detailContext?.productToShow.name}
              </h4>
              <p className="mb-xl font-medium text-lg text-ferre_blue400">
                {detailContext?.productToShow.description}
              </p>
              <p className="text-xl font-bold text-ferre_blue200">
                DOP$ {detailContext?.productToShow.regularPrice}
              </p>
            </div>
            <div className="mb-md flex items-center justify-between">
              <QuantitySelector
                addQuantity={addQuantity}
                subtractQuantity={subtractQuantity}
                quantity={quantity}
              />
              <AddCartBtn action={addProductToCart} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductModalDetails;

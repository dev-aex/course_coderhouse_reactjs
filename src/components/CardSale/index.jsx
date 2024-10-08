import { useContext, useState } from "react";

// Utils
import { formatNumbers } from "../../utils/formatNumbers";

//Context
import { ProductDetailContext } from "../../context/ProductDetailContext";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { GlobalContext } from "../../context/GlobalContext";

// Components
import QuantitySelector from "../QuantitySelector";
import AddCartBtn from "../AddCartBtn";

const CardSale = ({ imgsrc, name, regularPrice, salePrice, description }) => {
  // contexts variables
  const detailContext = useContext(ProductDetailContext);
  const cartContext = useContext(ShoppingCartContext);
  const globalContext = useContext(GlobalContext);

  // Show product details
  const showProduct = () => {
    const productInfo = { imgsrc, name, regularPrice, description };
    detailContext.openProductDetail();
    detailContext.setProductToShow(productInfo);
  };

  // Add to cart
  const addProductToCart = () => {
    const multiplication = regularPrice * quantity;

    const poductData = {
      imgsrc: imgsrc,
      name: name,
      regularPrice: regularPrice,
      quantity: quantity,
      multiplication: multiplication.toFixed(2),
    };

    const alreadyExist = cartContext.productInShoppingCart.find(
      (product) => name == product.name
    );

    if (alreadyExist) {
      cartContext.newQuantity(name, quantity);
    } else {
      cartContext?.setProductInShoppingCart([
        ...cartContext.productInShoppingCart,
        poductData,
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

  // Loader
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article className="w-[24.7rem] h-[36.5rem] bg-white shadow-lg shadow-ferre_blue400/25 shadow-xs shadow-ferre_blue400/50 rounded-xl">
      <figure
        onClick={showProduct}
        className="w-full h-[12.6rem] mb-4xs flex justify-center items-center cursor-pointer hover:opacity-50"
      >
        {isLoading ? <div className="loader"></div> : <></>}
        <img
          className={`${
            isLoading ? "hidden" : "w-full h-full object-contain rounded-t-lg"
          }`}
          src={imgsrc}
          alt={name}
          onLoad={() => setIsLoading(false)}
        />
      </figure>
      <section className="w-full h-full">
        <div className="w-full h-[11.6rem] mb-xs px-xs flex flex-col justify-between place-content-between items-start">
          <h4
            onClick={showProduct}
            className="w-full h-full mb-4xs pt-4xs text-md font-bold text-ferre_blue400 cursor-pointer hover:text-ferre_blue100"
          >
            {name}
          </h4>
          <p className="w-full h-full flex flex-col">
            <span className="text-sm font-semibold text-ferre_blue50 line-through">
              {formatNumbers(regularPrice)}
            </span>
            <span className="text-lg font-bold text-ferre_red">
              {formatNumbers(salePrice)}
            </span>
          </p>
        </div>
        <div className="px-xs pb-xs flex gap-3xs justify-center items-center">
          <QuantitySelector
            addQuantity={addQuantity}
            subtractQuantity={subtractQuantity}
            quantity={quantity}
          />
          <AddCartBtn action={addProductToCart} />
        </div>
      </section>
    </article>
  );
};

export default CardSale;

import { useState, useEffect } from "react";
import Base from "../../Layout/Base";
import ProductsListContainer from "../../Containers/ProductsListContainer";
import CardProduct from "../../Components/CardProduct";
import NavBar from "../../Components/NavBar";
import ProductModalDetails from "../../Components/ProductModalDetails";
import { ProductDetailProvider } from "../../Context";

const Plomeria = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <ProductDetailProvider>
      <ProductModalDetails />
      <Base>
        <NavBar plomeria={true} />
        <ProductsListContainer>
          {products?.plomeria?.map((items) => (
            <CardProduct
              key={items.id}
              imgsrc={items.imgSrc}
              name={items.name}
              regularPrice={items.regularPrice}
            />
          ))}
        </ProductsListContainer>
      </Base>
    </ProductDetailProvider>
  );
};

export default Plomeria;

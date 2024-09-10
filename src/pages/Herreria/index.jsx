import { useState, useEffect } from "react";
import Base from "../../Layout/Base";
import ProductsListContainer from "../../Containers/ProductsListContainer";
import CardProduct from "../../Components/CardProduct";
import NavBar from "../../Components/NavBar";

const Herreria = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/Data/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Base>
      <NavBar herreria={true} />
      <ProductsListContainer>
        {products?.herreria?.map((items) => (
          <CardProduct
            key={items.id}
            imgsrc={items.imgSrc}
            name={items.name}
            regularPrice={items.regularPrice}
            description={items.description}
          />
        ))}
      </ProductsListContainer>
    </Base>
  );
};

export default Herreria;

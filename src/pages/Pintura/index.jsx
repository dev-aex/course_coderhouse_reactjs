import { useState, useEffect } from "react";

// Layout
import Base from "../../layout/Base";

// Container
import ProductsListContainer from "../../containers/ProductsListContainer";

// Components
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Pintura = ({ data }) => {
  // Painting products filter
  const [paintingProduct, setPaintingProduct] = useState([]);

  useEffect(() => {
    if (data) {
      setPaintingProduct(data.filter((item) => item.id.startsWith("pin")));
    }
  }, [data]);
  return (
    <Base>
      <NavBar pintura={true} />
      <ProductsListContainer>
        {paintingProduct.map((items) => (
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

export default Pintura;

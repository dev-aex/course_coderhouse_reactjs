import { useState, useEffect } from "react";

// Layouts
import Base from "../../layout/Base";

// Containers
import ProductsListContainer from "../../containers/ProductsListContainer";

// Components
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Plomeria = ({ data }) => {
  // plumbing products filter
  const [plumbingProduct, setPlumbingProduct] = useState([]);

  useEffect(() => {
    if (data) {
      setPlumbingProduct(data.filter((item) => item.id.startsWith("plo")));
    }
  }, [data]);

  return (
    <Base>
      <NavBar plomeria={true} />
      <ProductsListContainer>
        {plumbingProduct.map((items) => (
          <CardProduct
            key={items.id}
            imgsrc={items.imgSrc}
            name={items.name}
            regularPrice={items.regularPrice}
          />
        ))}
      </ProductsListContainer>
    </Base>
  );
};

export default Plomeria;

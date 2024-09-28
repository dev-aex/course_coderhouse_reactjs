import { useState, useEffect } from "react";

// Layout
import Base from "../../layout/Base";

// Containers
import ProductsListContainer from "../../containers/ProductsListContainer";

// Components
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Herreria = ({ data }) => {
  // blacksmithing products filter
  const [blacksmithingProduct, setBlacksmithingProduct] = useState([]);

  useEffect(() => {
    if (data) {
      setBlacksmithingProduct(
        data.filter((item) => item.id.startsWith("hrre"))
      );
    }
  }, [data]);

  return (
    <Base>
      <NavBar herreria={true} />
      <ProductsListContainer>
        {blacksmithingProduct.map((items) => (
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

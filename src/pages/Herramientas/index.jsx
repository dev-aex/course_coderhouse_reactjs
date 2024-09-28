import { useState, useEffect } from "react";

// Layout
import Base from "../../layout/Base";

// Containers
import ProductsListContainer from "../../containers/ProductsListContainer";

// Components
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Herramientas = ({ data }) => {

    // tools products filter
    const [toolsProduct, setToolsProduct] = useState([]);

    useEffect(() => {
      if (data) {
        setToolsProduct(data.filter((item) => item.id.startsWith("hrra")));
      }
    }, [data]);

  return (
    <Base>
      <NavBar herramientas={true} />
      <ProductsListContainer>
        {toolsProduct.map((items) => (
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

export default Herramientas;

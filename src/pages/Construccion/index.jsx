import { useState, useEffect } from "react";

// Layout
import Base from "../../layout/Base";

// Container
import ProductsListContainer from "../../containers/ProductsListContainer";

// Components
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Construccion = ({ data }) => {
  
  // Construction products filter
  const [constructionProduct, setConstructionProduct] = useState([]);

  useEffect(() => {
    if (data) {
      setConstructionProduct(data.filter((item) => item.id.startsWith("c")));
    }
  }, [data]);

  return (
    <Base>
      <NavBar construccion={true} />
      <ProductsListContainer>
        {constructionProduct.map((items) => (
          <CardProduct
            onClick={() => setshowDetails(true)}
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

export default Construccion;

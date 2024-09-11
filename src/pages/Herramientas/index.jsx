import Base from "../../layout/Base";
import ProductsListContainer from "../../containers/ProductsListContainer";
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Herramientas = ({ data }) => {
  return (
    <Base>
      <NavBar herramientas={true} />
      <ProductsListContainer>
        {data?.herramientas?.map((items) => (
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

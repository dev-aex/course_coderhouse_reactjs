import Base from "../../layout/Base";
import ProductsListContainer from "../../containers/ProductsListContainer";
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Pintura = ({ data }) => {
  return (
    <Base>
      <NavBar pintura={true} />
      <ProductsListContainer>
        {data?.pintura?.map((items) => (
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

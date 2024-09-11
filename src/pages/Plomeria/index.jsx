import Base from "../../layout/Base";
import ProductsListContainer from "../../containers/ProductsListContainer";
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Plomeria = ({data}) => {

  return (
    <Base>
      <NavBar plomeria={true} />
      <ProductsListContainer>
        {data?.plomeria?.map((items) => (
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

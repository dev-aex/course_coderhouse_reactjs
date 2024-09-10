import Base from "../../Layout/Base";
import ProductsListContainer from "../../Containers/ProductsListContainer";
import CardProduct from "../../Components/CardProduct";
import NavBar from "../../Components/NavBar";

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

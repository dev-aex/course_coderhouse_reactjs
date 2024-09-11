import Base from "../../layout/Base";
import ProductsListContainer from "../../containers/ProductsListContainer";
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Herreria = ({ data }) => {
  return (
    <Base>
      <NavBar herreria={true} />
      <ProductsListContainer>
        {data?.herreria?.map((items) => (
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

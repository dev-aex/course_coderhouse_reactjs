import Base from "../../layout/Base";
import ProductsListContainer from "../../containers/ProductsListContainer";
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const Construccion = ({ data }) => {
  return (
    <Base>
      <NavBar construccion={true} />
      <ProductsListContainer>
        {data?.construccion?.map((items) => (
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

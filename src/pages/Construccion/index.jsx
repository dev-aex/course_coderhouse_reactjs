import Base from "../../Layout/Base";
import ProductsListContainer from "../../Containers/ProductsListContainer";
import CardProduct from "../../Components/CardProduct";
import NavBar from "../../Components/NavBar";

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

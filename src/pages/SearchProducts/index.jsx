import { useState, useEffect } from "react";

// Layouts
import Base from "../../layout/Base";

// Containers
import ProductsListContainer from "../../containers/ProductsListContainer";

// Components
import CardProduct from "../../components/CardProduct";
import NavBar from "../../components/NavBar";

const SearchProducts = ({ data, searchword }) => {
  // Filter search products
  const [searchproducts, setSearchproducts] = useState([]);

  // Searching words
  useEffect(() => {
    if (data) {
      if (searchword === "") {
        setSearchproducts(data);
      } else {
        setSearchproducts(
          data.filter((item) =>
            item.name
              .toLowerCase()
              .normalize("NFD")
              .includes(searchword.toLowerCase())
          )
        );
      }
    }
  }, [data, searchword]);

  return (
    <Base>
      <NavBar />
      <h1 className="text-2xl font-bold text-ferre_blue200">
        {searchword === "" ? "Busqueda" : `Buscando "${searchword}"`}
      </h1>
      <ProductsListContainer>
        {searchproducts.map((items) => (
          <CardProduct
            key={items.id}
            imgsrc={items.imgSrc}
            name={items.name}
            regularPrice={items.regularPrice}
          />
        ))}
        {searchproducts.length === 0 ? (
          <div className="absolute top-[60%] right-[44%] flex flex-col items-center justify-center gap-md text-ferre_blue300 font-normal text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 8V12M12 16.01L12.01 15.999M9 3H4V6M4 11V13M20 11V13M15 3H20V6M9 21H4V18M15 21H20V18"
                stroke="#081850"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <h2>No se encontraron productos</h2>
          </div>
        ) : (
          ""
        )}
      </ProductsListContainer>
    </Base>
  );
};

export default SearchProducts;

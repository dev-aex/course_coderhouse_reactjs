import { useState, useEffect } from "react";
import CardSale from "../CardSale";

const Sales = ({ data }) => {
  const [OnSale, setOnSale] = useState([]);

  useEffect(() => {
    if (data) {
      setOnSale(data.filter((item) => item.onSale));
    }
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-md">
      {OnSale.map((items) => (
        <CardSale
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={items.regularPrice}
          salePrice={items.salePrice}
          description={items.description}
        />
      ))}
    </div>
  );
};

export default Sales;

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
    <div className=" flex gap-md">
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

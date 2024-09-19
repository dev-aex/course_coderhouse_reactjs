import {formatNumbers} from "../../utils/formatNumbers";
import { useState, useEffect } from "react";
import CardSale from "../CardSale";

const Sales = ({ data }) => {
  const [construccionOnSale, setConstruccionOnSale] = useState([]);
  const [herramientasOnSale, setHerramientasOnSale] = useState([]);
  const [herreriaOnSale, setHerreriaOnSale] = useState([]);
  const [plomeriaOnSale, setPlomeriaOnSale] = useState([]);
  const [pinturaOnSale, setPinturaOnSale] = useState([]);

  useEffect(() => {
    if (data && data.construccion) {
      setConstruccionOnSale(data.construccion.filter((item) => item.onSale));
    }
    if (data && data.herramientas) {
      setHerramientasOnSale(data.herramientas.filter((item) => item.onSale));
    }
    if (data && data.herreria) {
      setHerreriaOnSale(data.herreria.filter((item) => item.onSale));
    }
    if (data && data.plomeria) {
      setPlomeriaOnSale(data.plomeria.filter((item) => item.onSale));
    }
    if (data && data.pintura) {
      setPinturaOnSale(data.pintura.filter((item) => item.onSale));
    }
  }, [data]);

  return (
    <div className=" flex gap-md">
      {construccionOnSale.map((items) => (
        <CardSale
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={formatNumbers(items.regularPrice)}
          salePrice={formatNumbers(items.salePrice)}
          description={items.description}
        />
      ))}
      {herramientasOnSale.map((items) => (
        <CardSale
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={formatNumbers(items.regularPrice)}
          salePrice={formatNumbers(items.salePrice)}
          description={items.description}
        />
      ))}
      {herreriaOnSale.map((items) => (
        <CardSale
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={formatNumbers(items.regularPrice)}
          salePrice={formatNumbers(items.salePrice)}
          description={items.description}
        />
      ))}
      {plomeriaOnSale.map((items) => (
        <CardSale
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={formatNumbers(items.regularPrice)}
          salePrice={formatNumbers(items.salePrice)}
          description={items.description}
        />
      ))}
      {pinturaOnSale.map((items) => (
        <CardSale
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={formatNumbers(items.regularPrice)}
          salePrice={formatNumbers(items.salePrice)}
          description={items.description}
        />
      ))}
    </div>
  );
};

export default Sales;

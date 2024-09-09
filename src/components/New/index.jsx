import { useState, useEffect } from "react";
import CardNew from "../CardNew";

const New = ({ data }) => {
  const [construccionIsNew, setConstruccionIsNew] = useState([]);
  const [herramientasIsNew, setHerramientasIsNew] = useState([]);
  const [herreriaIsNew, setHerreriaIsNew] = useState([]);
  const [plomeriaIsNew, setPlomeriaIsNew] = useState([]);
  const [pinturaIsNew, setPinturaIsNew] = useState([]);

  useEffect(() => {
    if (data && data.construccion) {
      setConstruccionIsNew(data.construccion.filter((item) => item.isNew));
    }
    if (data && data.herramientas) {
      setHerramientasIsNew(data.herramientas.filter((item) => item.isNew));
    }
    if (data && data.herreria) {
      setHerreriaIsNew(data.herreria.filter((item) => item.isNew));
    }
    if (data && data.plomeria) {
      setPlomeriaIsNew(data.plomeria.filter((item) => item.isNew));
    }
    if (data && data.pintura) {
      setPinturaIsNew(data.pintura.filter((item) => item.isNew));
    }
  }, [data]);

  return (
    <div className=" flex gap-md">
      {construccionIsNew.map((items) => (
        <CardNew
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={items.regularPrice}
          description={items.description}
        />
      ))}
      {herramientasIsNew.map((items) => (
        <CardNew
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={items.regularPrice}
          description={items.description}
        />
      ))}
      {herreriaIsNew.map((items) => (
        <CardNew
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={items.regularPrice}
          description={items.description}
        />
      ))}
      {plomeriaIsNew.map((items) => (
        <CardNew
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={items.regularPrice}
          description={items.description}
        />
      ))}
      {pinturaIsNew.map((items) => (
        <CardNew
          key={items.id}
          imgsrc={items.imgSrc}
          name={items.name}
          regularPrice={items.regularPrice}
          description={items.description}
        />
      ))}
    </div>
  );
};

export default New;

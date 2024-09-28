import { useState, useEffect } from "react";
import CardNew from "../CardNew";

const New = ({ data }) => {
  const [IsNew, setIsNew] = useState([]);

  useEffect(() => {
    if (data) {
      setIsNew(data.filter((item) => item.isNew));
    }
  }, [data]);

  return (
    <div className=" flex gap-md">
      {IsNew.map((items) => (
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

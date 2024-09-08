import AddCartBtn from "../AddCartBtn";

const CardSale = () => {
  return (
    <div className="w-[24.7rem] h-[28.2rem] p-xs bg-white shadow ">
      <figure>
        <img src="https://picsum.photos/seed/img8/500/350" alt="" />
      </figure>
      <section>
        <div>
          <h4>Caja plástica con compartimientos, broche metálico</h4>
          <p>
            <span>DOP$ 1,046.57</span>
            <span>DOP$ 867.20</span>
          </p>
        </div>
        <div>
          <AddCartBtn />
        </div>
      </section>
    </div>
  );
};

export default CardSale;

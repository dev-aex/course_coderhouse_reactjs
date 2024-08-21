import Imagen from "../../assets/img/slide-ejemplo1.jpg"

const Slider = () => {
  return (
    <section>
      <div className="w-full h-[320px] rounded-md">
        <img className="w-full h-auto" src={Imagen} alt="" />
      </div>
    </section>
  )
}

export default Slider
const CarrouselContainer = ({children, title}) => {
  return (
    <section>
      <h2 className="mb-xs text-xl font-bold text-primario-300">{title}</h2>
      <div className="w-full h-full flex gap-3xs">
      {children}
        </div>
    </section>
  )
}

export default CarrouselContainer
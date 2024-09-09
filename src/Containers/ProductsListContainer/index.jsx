const ProductsListContainer = ({children}) => {
return (
  <section className="w-full h-full grid grid-cols-5 gap-xl">
    {children}
  </section>
)
}

export default ProductsListContainer;
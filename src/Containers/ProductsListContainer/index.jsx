const ProductsListContainer = ({children}) => {
return (
  <section className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-xl">
    {children}
  </section>
)
}

export default ProductsListContainer;
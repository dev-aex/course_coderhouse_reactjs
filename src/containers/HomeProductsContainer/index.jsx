const HomeProductsContainer = ({ children, title }) => {
  return (
    <section className="mb-lg">
      <h2 className="mb-xs text-xl font-bold text-primario-300">{title}</h2>
      <div className="w-full h-full flex gap-3xs">
        {children}
        </div>
    </section>
  );
};

export default HomeProductsContainer;

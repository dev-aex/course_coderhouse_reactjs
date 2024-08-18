import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import Slider from "./components/Slider";
import Ofertas from "./components/Ofertas";
import Novedades from "./components/Novedades";
function App() {
  return (
    <>
      <header className="mt-[6.9rem] mx-[13.8rem] flex flex-col gap-xl">
        <TopBar />
        <NavBar />
      </header>
      <main className="mt-lg mx-[13.8rem] flex flex-col gap-md">
        <Slider />
        <Ofertas />
        <Novedades />
      </main>
      <footer>
        <FooterBar />
      </footer>
    </>
  );
}

export default App;

import TopBar from "../components/TopBar";
import NavBar from "../components/NavBar";
import FooterBar from "../components/FooterBar";

const Base = ({ children }) => {
  return (
    <>
      <header className="mt-[8.9rem] mx-[13.8rem] flex flex-col gap-4xl">
        <TopBar />
      </header>
      <main className="mt-3xl mx-[13.8rem] flex flex-col gap-4xl">{children}</main>
      <footer>
        <FooterBar />
      </footer>
    </>
  );
};

export default Base;

import TopBar from "../components/TopBar";
import FooterBar from "../components/FooterBar";

const Base = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col min-h-screen">
      <header className="mt-[8.9rem] mx-[13.8rem] flex flex-col gap-4xl">
        <TopBar />
      </header>
      <main className="flex-grow mt-3xl mx-[13.8rem] flex flex-col gap-4xl">{children}</main>
      <footer>
        <FooterBar />
      </footer>
    </div>
  );
};

export default Base;

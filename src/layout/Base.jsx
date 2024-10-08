// Components
import Topbar from "../components/Topbar";
import FooterBar from "../components/FooterBar";

const Base = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="mt-[8.9rem] mx-[13.8rem] flex flex-col gap-4xl">
        <Topbar />
      </header>
      <main className="flex-grow mt-3xl mx-[13.8rem] flex flex-col gap-4xl">
        {children}
      </main>
      <footer>
        <FooterBar />
      </footer>
    </div>
  );
};

export default Base;

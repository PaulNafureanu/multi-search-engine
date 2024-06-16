import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ResultsContainer from "./components/Main/ResultsContainer";
import NavBar from "./components/NavBar/NavBar";
import { useDarkMode } from "./contexts/DarkModeProvider";

const App = () => {
  const [darkMode] = useDarkMode();

  return (
    <div
      className={`w-full h-full flex flex-col ${
        darkMode ? "dark" : ""
      } dark:bg-blue-950 transition`}
    >
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

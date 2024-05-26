import { useState } from "react";
import Footer from "./components/Footer/Footer";
import ResultsContainer from "./components/Main/ResultsContainer";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`w-full h-full flex flex-col ${darkMode ? "dark" : ""}`}>
      <NavBar />
      <ResultsContainer />
      <Footer />
    </div>
  );
};

export default App;

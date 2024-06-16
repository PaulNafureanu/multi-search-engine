import { useDarkMode } from "../../contexts/DarkModeProvider";
import MoonSVG from "../../svgs/MoonSVG";
import SVGWrapper from "../../svgs/SVGWrapper";
import SunSVG from "../../svgs/SunSVG";
import ToggleOffSVG from "../../svgs/ToggleOffSVG";
import ToggleOnSVG from "../../svgs/ToggleOnSVG";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const handleClick = () => setDarkMode(!darkMode);

  return (
    <div
      className="flex items-center justify-items-center gap-2"
      onClick={handleClick}
    >
      {darkMode ? (
        <SVGWrapper svg={<MoonSVG />} className="w-5 h-5" />
      ) : (
        <SVGWrapper svg={<SunSVG />} className="w-5 h-5" fill="white" />
      )}
      {darkMode ? (
        <SVGWrapper svg={<ToggleOnSVG />} className="w-8 h-8" />
      ) : (
        <SVGWrapper svg={<ToggleOffSVG />} className="w-8 h-8" fill="white" />
      )}
    </div>
  );
};

export default DarkModeToggle;

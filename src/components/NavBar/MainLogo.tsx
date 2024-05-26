import { useDarkMode } from "../../contexts/DarkModeProvider";
import SVGWrapper from "../../svgs/SVGWrapper";
import LogoSVG from "../../svgs/logo/LogoSVG";
import LogoWhiteSVG from "../../svgs/logo/LogoWhiteSVG";

const MainLogo = () => {
  const [darkMode] = useDarkMode();

  return (
    <div className="flex items-center justify-items-center">
      {darkMode ? (
        <SVGWrapper svg={<LogoSVG />} className="w-40 h-40" />
      ) : (
        <SVGWrapper svg={<LogoWhiteSVG />} className="w-40 h-40" />
      )}
    </div>
  );
};

export default MainLogo;

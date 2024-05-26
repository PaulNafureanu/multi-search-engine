import DarkModeToggle from "./DarkModeToggle";
import MainLogo from "./MainLogo";

const NavBar = () => {
  return (
    <div className="h-10 flex justify-between border content-center border-black px-5 bg-blue-950 dark:bg-white transition">
      <MainLogo />
      <DarkModeToggle />
    </div>
  );
};

export default NavBar;

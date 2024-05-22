import ThemeSwitcher from "../../../assets/images/theme-switcher.svg";
import { useTheme } from "../../../hooks/useTheme";

const Header = () => {
  const { mode, changeMode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <>
      <img
        onClick={toggleMode}
        src={ThemeSwitcher}
        alt="theme switcher"
        className={`w-8 bg-gray-500 p-1 rounded-full cursor-pointer ${
          mode === "dark" ? "invert" : ""
        }`}
      />
    </>
  );
};

export default Header;

import ThemeSwitcher from "../../../assets/images/theme-switcher.svg";

const Header = () => {
  return (
    <>
      <img
        src={ThemeSwitcher}
        alt="theme switcher"
        className="w-6 bg-white invert p-0.5 rounded-full cursor-pointer"
      />
    </>
  );
};

export default Header;

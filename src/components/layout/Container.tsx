import Header from "./header/Header";
import MainSection from "./main-section/MainSection";

type Props = {};

const Container = ({}: Props) => {
  return (
    <div className="w-full h-screen flex flex-col gap-5 p-3">
      <Header />
      <MainSection />
    </div>
  );
};

export default Container;

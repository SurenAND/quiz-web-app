import SetupPage from "../../../pages/setup-page/SetupPage";
import StartPage from "../../../pages/start-page/StartPage";
import Main from "../../../pages/main-page/Main";
import ResultPage from "../../../pages/result-page/ResultPage";
import { useFormContext } from "../../../context/FormContext";

const MainSection = () => {
  const { formState }: any = useFormContext();
  return (
    <>
      {formState.page === 0 ? (
        <StartPage />
      ) : formState.page === 1 ? (
        <SetupPage />
      ) : formState.page === 2 ? (
        <Main />
      ) : formState.page === 3 ? (
        <ResultPage />
      ) : null}
    </>
  );
};

export default MainSection;

import Quiz from "../../assets/images/quiz.svg";
import SpaceShip from "../../assets/images/space-ship.gif";
import { useFormContext } from "../../context/FormContext";
import { useTheme } from "../../hooks/useTheme";
import { QuizActionTypesEnum } from "../../types/types";

const StartPage = () => {
  const { formDispatch } = useFormContext();
  const { mode } = useTheme();
  return (
    <div className="md:w-[45%] w-4/5 h-4/5 bg-violet-500 rounded-2xl m-auto p-10 flex flex-col items-center justify-between">
      <img src={Quiz} alt="quiz" className="w-44" />
      <h3 className="text-white text-2xl font-bold">Welcome to the quiz app</h3>
      <div className="flex flex-col items-center gap-3">
        <h4 className="text-white text-lg font-bold">GET START</h4>
        <div
          className={`${
            mode === "dark" ? "bg-gray-800" : "bg-white"
          } rounded-full p-2 cursor-pointer`}
          onClick={() => {
            formDispatch({
              type: QuizActionTypesEnum.CHANGE_PAGE,
              payload: { page: 1 },
            });
          }}
        >
          <img src={SpaceShip} alt="space ship" />
        </div>
      </div>
    </div>
  );
};

export default StartPage;

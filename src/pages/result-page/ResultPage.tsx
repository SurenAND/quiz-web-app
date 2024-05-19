import Quiz from "../../assets/images/quiz.svg";
import Congrats from "../../assets/images/congrats.webp";
import Fail from "../../assets/images/fail.webp";
import { useFormContext } from "../../context/FormContext";
import { QuizActionTypesEnum } from "../../types/types";
import { useRef } from "react";

function ResultPage() {
  const { formState, formDispatch } = useFormContext();

  const score = useRef((formState.score * 100) / formState.quizData.length);

  const handlePlayAgain = () => {
    formDispatch({
      type: QuizActionTypesEnum.RESET,
    });
  };

  return (
    <div className="md:w-[45%] w-4/5 h-4/5 bg-violet-500 rounded-2xl m-auto p-10 flex flex-col items-center justify-between">
      {/* quiz img */}
      <img src={Quiz} alt="quiz" className="w-44" />

      {/* result  */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-32 h-32 flex items-center justify-center bg-white p-3 rounded-full">
          <img src={score.current > 50 ? Congrats : Fail} alt="congrats" />
        </div>
        <div className="text-lg font-bold text-white bg-green-400 p-1 rounded-full">
          {score.current > 50 ? "🔥 CONGRATS 🔥" : "🥲 TRY AGAIN 🥲"}
        </div>
      </div>

      {/* score */}
      <div className="text-white font-semibold">
        YOUR SCORE = {score.current} %
      </div>

      {/* play again */}
      <button
        className="text-white font-semibold cursor-pointer"
        onClick={handlePlayAgain}
      >
        Play Again
      </button>
    </div>
  );
}

export default ResultPage;

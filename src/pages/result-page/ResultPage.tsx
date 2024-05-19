import Quiz from "../../assets/images/quiz.svg";
import Congrats from "../../assets/images/congrats.webp";
import { useFormContext } from "../../context/FormContext";

function ResultPage() {
  const { formState } = useFormContext();
  return (
    <div className="md:w-[45%] w-4/5 h-4/5 bg-violet-500 rounded-2xl m-auto p-10 flex flex-col items-center justify-between">
      {/* quiz img */}
      <img src={Quiz} alt="quiz" className="w-44" />

      {/* result  */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-32 h-32 flex items-center justify-center bg-white p-3 rounded-full">
          <img src={Congrats} alt="congrats" />
        </div>
        <div className="text-lg font-bold text-white bg-green-400 p-1 rounded-full">
          🔥 CONGRATS 🔥
        </div>
      </div>

      {/* score */}
      <div className="text-white font-semibold">YOUR SCORE = 55 %</div>

      {/* play again */}
      <button className="text-white font-semibold">Play Again</button>
    </div>
  );
}

export default ResultPage;

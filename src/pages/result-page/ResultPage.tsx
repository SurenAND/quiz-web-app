import Quiz from "../../assets/images/quiz.svg";
import Congrats from "../../assets/images/congrats.webp";
// import CelebrationGif from "../../assets/images/celebration.gif";
import Fail from "../../assets/images/fail.webp";
import { useFormContext } from "../../context/FormContext";
import { QuizActionTypesEnum } from "../../types/types";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  bounceInVariants,
  fadeInDownVariants,
  moveUpHoverVariants,
} from "../../library/framerMotion";

function ResultPage() {
  const { formState, formDispatch } = useFormContext();

  const score = useRef((formState.score * 100) / formState.quizData.length);

  const handlePlayAgain = () => {
    formDispatch({
      type: QuizActionTypesEnum.RESET,
    });
  };

  return (
    <>
      <div className="overflow-hidden md:w-[45%] w-4/5 h-4/5 bg-violet-500 rounded-2xl m-auto p-10 flex flex-col items-center justify-between">
        {/* quiz img */}
        <motion.img
          variants={fadeInDownVariants}
          initial="hidden"
          animate="visible"
          src={Quiz}
          alt="quiz"
          className="w-44"
        />

        {/* result  */}
        <motion.div
          variants={fadeInDownVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3"
        >
          <div className="w-32 h-32 flex items-center justify-center bg-white p-3 rounded-full">
            <img src={score.current > 50 ? Congrats : Fail} alt="congrats" />
          </div>
          <div className="text-lg font-bold text-white bg-green-400 p-1 rounded-full">
            {score.current > 50 ? "🔥 CONGRATS 🔥" : "🥲 TRY AGAIN 🥲"}
          </div>
        </motion.div>

        {/* score */}
        <motion.div
          variants={bounceInVariants}
          initial="hidden"
          animate="visible"
          className="text-white font-semibold"
        >
          YOUR SCORE = {score.current} %
        </motion.div>

        {/* play again */}
        <motion.button
          variants={moveUpHoverVariants}
          whileHover="hover"
          className="bg-gray-600 text-white font-semibold cursor-pointer p-2 rounded-md z-50"
          onClick={handlePlayAgain}
        >
          Play Again
        </motion.button>

        {/* celebration gif */}
        {/* {score.current > 0 && (
          <video
            className="absolute bottom-0"
            src={CelebrationGif}
            autoPlay
            loop={false}
          />
        )} */}
      </div>
    </>
  );
}

export default ResultPage;

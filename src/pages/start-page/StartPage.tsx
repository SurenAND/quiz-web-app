import { motion } from "framer-motion";
import Quiz from "../../assets/images/quiz.svg";
import SpaceShip from "../../assets/images/space-ship.gif";
import { useFormContext } from "../../context/FormContext";
import { useTheme } from "../../hooks/useTheme";
import { QuizActionTypesEnum } from "../../types/types";
import {
  bounceInVariants,
  fadeInDownVariants,
  moveUpHoverVariants,
} from "../../library/framerMotion";

const StartPage = () => {
  const { formDispatch } = useFormContext();
  const { mode } = useTheme();

  return (
    <div className="md:w-[45%] w-4/5 h-4/5 bg-violet-500 rounded-2xl m-auto p-10 flex flex-col items-center justify-between overflow-hidden">
      <motion.img
        variants={fadeInDownVariants}
        initial="hidden"
        animate="visible"
        src={Quiz}
        alt="quiz"
        className="w-44"
      />
      <motion.h3
        variants={bounceInVariants}
        initial="hidden"
        animate="visible"
        className="text-white text-2xl font-bold"
      >
        Welcome to the quiz app
      </motion.h3>
      <motion.div
        variants={bounceInVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center gap-3"
      >
        <h4 className="text-white text-lg font-bold">GET START</h4>
        <motion.div
          variants={moveUpHoverVariants}
          whileHover="hover"
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StartPage;

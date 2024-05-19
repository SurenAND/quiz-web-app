import { useEffect, useState } from "react";
import Quiz from "../../assets/images/quiz.svg";
import Start from "../../assets/images/start.svg";
import Selection from "../../components/shared/selection/Selection";
import { selectionData } from "../../constant/selection-data";
import { getAPI } from "../../library/axios";
import { QuizActionTypesEnum } from "../../types/types";
import { useFormContext } from "../../context/FormContext";

const SetupPage = () => {
  // states
  const [number, setNumber] = useState(0);
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [numberError, setNumberError] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);

  // context
  const { formState, formDispatch } = useFormContext();
  // functions
  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;
    if (value < 5 || value > 50) {
      setNumberError(true);
    } else {
      setNumber((prev) => (prev = value));
      setNumberError(false);
      setIsNumberValid(true);
    }
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficulty(e.target.value);
  };

  const handleData = () => {
    getAPI(number, category, difficulty)
      .then((data) =>
        formDispatch({
          type: QuizActionTypesEnum.SET_QUIZ_DATA,
          payload: data,
        })
      )
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log(formState.quizData);
    if (formState.quizData.length > 0) {
      handleNextPage();
    }
  }, [formState.quizData]);

  const handleNextPage = () => {
    formDispatch({
      type: QuizActionTypesEnum.CHANGE_PAGE,
      payload: { page: 2 },
    });
  };

  const handleSubmit = () => {
    if (isNumberValid) {
      handleData();
    } else {
      setNumberError(true);
    }
  };

  return (
    <div className="md:w-[45%] w-4/5 h-4/5 bg-violet-500 rounded-2xl m-auto p-10 flex flex-col items-center gap-20">
      {/* quiz img */}
      <img src={Quiz} alt="quiz" className="w-44" />
      {/* title */}
      <h3 className="text-white text-xl font-bold">Setup Quiz</h3>
      {/* form */}
      <div className="w-3/4 flex flex-col gap-1">
        {/* number input */}
        <label className="pl-1 text-white text-sm font-semibold">
          Number Of Questions (between 5 and 50)
        </label>
        <input
          type="number"
          placeholder="Enter Number"
          className="p-2 rounded-md bg-yellow-300 focus:outline-none text-black"
          onChange={handleNumber}
        />
        {numberError && (
          <p className="text-red-300 text-sm">
            Please enter a number between 5 and 50
          </p>
        )}

        {/* category selection */}
        <label className="pl-1 text-white text-sm font-semibold">
          Category
        </label>
        <Selection onchange={handleCategory} options={selectionData.category} />

        {/* difficulty selection */}
        <label className="pl-1 text-white text-sm font-semibold">
          Difficulty
        </label>
        <Selection
          onchange={handleDifficulty}
          options={selectionData.difficulty}
        />
      </div>

      {/* start btn */}
      <div className="flex flex-col items-center gap-1">
        <h4 className="text-white text-xs font-bold">START</h4>
        <div className="w-8 bg-white rounded-full p-0.5 cursor-pointer">
          <img src={Start} alt="start button" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SetupPage;

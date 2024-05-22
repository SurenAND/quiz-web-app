import Quiz from "../../assets/images/quiz.svg";
import { useFormContext } from "../../context/FormContext";
import useQuestion from "../../hooks/useQuestion";
import { QuizActionTypesEnum } from "../../types/types";

function Main() {
  const { formState, formDispatch } = useFormContext();
  const { question, answers } = useQuestion();

  const handleAnswerSelection = (selectedAnswer: string): void => {
    const handleAnswer = (selectedAnswer: string): void => {
      const currentQuestion =
        formState.quizData[formState.currentQuestionIndex];
      if (currentQuestion.correct_answer === selectedAnswer) {
        formDispatch({ type: QuizActionTypesEnum.INCREMENT_SCORE });
      }
      if (formState.currentQuestionIndex < formState.quizData.length - 1) {
        formDispatch({ type: QuizActionTypesEnum.NEXT_QUESTION });
      } else {
        formDispatch({
          type: QuizActionTypesEnum.CHANGE_PAGE,
          payload: { page: 3 },
        });
      }
    };
    handleAnswer(selectedAnswer);
  };

  return (
    <div className="md:w-[45%] w-4/5 h-4/5 bg-violet-500 rounded-2xl m-auto p-10 flex flex-col items-center gap-20">
      {/* quiz img */}
      <img src={Quiz} alt="quiz" className="w-44" />
      <div className="bg-white p-3 rounded-xl w-5/6 h-1/4 shadow-2xl font-semibold">
        <p>
          {formState.currentQuestionIndex + 1} - {question?.question}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full">
        {answers?.map((answer: string, index: number) => {
          return (
            <button
              key={index}
              className="w-3/4 flex gap-2 bg-teal-300 p-2 rounded-md mx-auto focus:bg-teal-200
         shadow-2xl font-semibold"
              onClick={() => handleAnswerSelection(answer)}
            >
              {index + 1}. {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Main;

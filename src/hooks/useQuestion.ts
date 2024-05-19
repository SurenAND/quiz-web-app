import { useEffect, useState } from "react";
import { useFormContext } from "../context/FormContext";
import { arrayShuffle } from "../library/arrayShuffle";
import { QuestionType } from "../types/types";

const useQuestion = () => {
  const { formState } = useFormContext();
  const [question, setQuestion] = useState<QuestionType>();
  const [answers, setAnswers] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    setQuestion(formState.quizData[formState.currentQuestionIndex]);
  }, [formState.currentQuestionIndex, formState.quizData]);

  useEffect(() => {
    if (question) {
      const shuffledAnswers = arrayShuffle(
        question.incorrect_answers.concat(question.correct_answer)
      );
      setAnswers(shuffledAnswers);
    }
  }, [question]);

  return { question, answers };
};

export default useQuestion;

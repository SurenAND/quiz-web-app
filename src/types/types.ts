export enum QuizActionTypesEnum {
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_QUIZ_DATA = "SET_QUIZ_DATA",
  INCREMENT_SCORE = "INCREMENT_SCORE",
  NEXT_QUESTION = "NEXT_QUESTION",
  CHANGE_PAGE = "CHANGE_PAGE",
}

export type QuestionType = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

import { ReactNode, createContext, useContext, useReducer } from "react";
import { QuizActionTypesEnum } from "../types/types";

// initial form state
const initialFormState = {
  page: 0,
  quizData: [],
  currentQuestionIndex: 0,
  score: 0,
};

// formReducer
const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case QuizActionTypesEnum.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case QuizActionTypesEnum.SET_QUIZ_DATA:
      return { ...state, quizData: action.payload };
    case QuizActionTypesEnum.INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case QuizActionTypesEnum.NEXT_QUESTION:
      return { ...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    case QuizActionTypesEnum.CHANGE_PAGE:
      return { ...state, page: action.payload.page };
    case QuizActionTypesEnum.RESET:
      return initialFormState;

    default:
      break;
  }
};

// Form Context
const FormContext = createContext<{
  formState: any;
  formDispatch: any;
}>({ formState: initialFormState, formDispatch: () => {} });

// custom hook to use FormContext
export const useFormContext = () => useContext(FormContext);

//  FormContext Provider
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ formState, formDispatch }}>
      {children}
    </FormContext.Provider>
  );
};

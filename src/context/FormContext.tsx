import { ReactNode, createContext, useContext, useReducer } from "react";
import {
  FormReducerActionType,
  FormReducerStateType,
  QuizActionTypesEnum,
} from "../types/types";

// initial form state
const initialFormState: FormReducerStateType = {
  page: 0,
  quizData: [],
  currentQuestionIndex: 0,
  score: 0,
};

// formReducer
const formReducer = (
  state: FormReducerStateType,
  action: FormReducerActionType
): FormReducerStateType => {
  switch (action.type) {
    case QuizActionTypesEnum.SET_CURRENT_PAGE:
      return { ...state, page: action.payload };
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
      return state;
  }
};

// Form Context
const FormContext = createContext<{
  formState: FormReducerStateType;
  formDispatch: React.Dispatch<FormReducerActionType>;
}>({ formState: initialFormState, formDispatch: () => undefined });

// custom hook to use FormContext
export const useFormContext = () => useContext(FormContext);

// FormContext Provider
export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formState, formDispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={{ formState, formDispatch }}>
      {children}
    </FormContext.Provider>
  );
};

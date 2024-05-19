import axios from "axios";
import { PATHS } from "../constant/path";
import { QuestionType } from "../types/types";

// Fetch questions from the API
export async function getAPI(
  number: number,
  category?: string,
  difficulty?: string
): Promise<QuestionType[]> {
  const response = await axios.get(
    `${PATHS.DATA_BASE}amount=${number}&category=${category}&difficulty=${difficulty}`
  );
  return response.data.results;
}

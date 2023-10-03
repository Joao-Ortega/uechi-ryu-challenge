import { StaticImageData } from "next/image";

interface IAnswers {
  correct: boolean;
  data: string;
}

export interface IQuestionsProps {
  type: string;
  content: string | StaticImageData;
  options: IAnswers[]
}

export interface IQuestionPropsV2 {
  questions: IQuestionsProps[]
}
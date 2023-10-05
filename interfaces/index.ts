import { StaticImageData } from "next/image";

export interface IAnswers {
  correct: number;
  data: string;
}

export interface IQuestionsProps {
  type: string;
  content: string | (string | StaticImageData)[];
  options: IAnswers[]
}

export interface IQuestionPropsV2 {
  questions: IQuestionsProps[];
  finishGame: Function;
}

export interface IFinishedGameProps {
  open: boolean;
  setOpen: Function;
  points: number;
}
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
  responses: string[];
  countResponse: Function;
  finishGame: Function;
  addPoints: Function;
  points: number;
  mainLoading: boolean;
  setMainLoading: Function;
  restoreGame: boolean;
}

export interface IFinishedGameProps {
  currentState: boolean;
  open: boolean;
  setOpen: Function;
  points: number;
  setPoints: Function;
  restart: Function;
  setMainLoading: Function;
}
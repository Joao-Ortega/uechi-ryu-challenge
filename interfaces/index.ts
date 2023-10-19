import { StaticImageData } from "next/image";

export interface IAnswers {
  correct: number;
  data: string;
}

export interface IQuestions {
  type: string;
  content: string | (string | StaticImageData)[];
  options: IAnswers[]
}

export interface IRenderQuestionProps {
  questions: IQuestions[];
  responses: string[];
  countResponse: Function;
  finishGame: Function;
  addPoints: Function;
  points: number;
  mainLoading: boolean;
  setMainLoading: Function;
  restoreGame: boolean;
  mode: string;
}

export interface IFinishedGameProps {
  currentState: boolean;
  open: boolean;
  setOpen: Function;
  points: number;
  setPoints: Function;
  restart: Function;
  setMainLoading: Function;
  mode: string;
}
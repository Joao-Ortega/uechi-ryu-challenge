import { StaticImageData } from "next/image";

interface IAnswers {
  correct: boolean;
  data: string;
}

export interface IQuestions {
  type: string;
  content: string | StaticImageData;
  options: IAnswers[]
}
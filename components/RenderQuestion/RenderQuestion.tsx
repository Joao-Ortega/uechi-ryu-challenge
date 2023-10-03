import { IQuestions } from '@/interfaces';
import { Box, Container } from '@mui/material';
import React, { ReactNode } from 'react';

const RenderQuestion: React.FC<IQuestions[]> = (questions: IQuestions[]) => {

  const buildQuestion = (question: IQuestions): JSX.Element => {
    return <Box></Box>
  }

  return (
    <Box
      sx={{
        border: '1px solid red',
        margin: '2% auto 0 auto',
        width: '90vw',
        height: '40vh'
      }}
    >
      {questions.length && questions.map((question: IQuestions, i: number) => buildQuestion(question))}
    </Box>
  )
};

export default RenderQuestion;

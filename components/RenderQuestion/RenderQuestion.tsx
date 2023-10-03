'use client'
import { IQuestionPropsV2, IQuestionsProps } from '@/interfaces';
import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React, { ReactNode, useEffect, useState } from 'react';

const RenderQuestion: React.FC<IQuestionPropsV2> = ({ questions }: IQuestionPropsV2) => {
  const [randomIndex, setRandomIndex] = useState<number>(Math.floor((Math.random() * questions.length)))

  useEffect(() => {
    console.log('ola', questions);
    console.log('selectQuestion', randomIndex)
  }, [])

  const buildQuestion = (question: IQuestionsProps): JSX.Element => {
    if (question.type === 'text' && typeof question.content === 'string') {
      return (
        <Typography
          variant='h6'
          sx={{
            textAlign: 'center',
            color: 'white'
          }}
        >
          {question.content}
        </Typography>
      )
    }
    return (
      <Image
        alt='image question'
        src={question.content}
        width={50}
        height={50}
      />
    )
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
      { questions.length && buildQuestion(questions[randomIndex]) }
    </Box>
  )
};

export default RenderQuestion;

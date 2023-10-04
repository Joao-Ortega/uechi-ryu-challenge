'use client'
import { IAnswers, IQuestionPropsV2, IQuestionsProps } from '@/interfaces';
import { Box, Button, Container, FormControl, FormControlLabel, LinearProgress, Radio, RadioGroup, Typography } from '@mui/material';
import Image from 'next/image';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import path from 'path';

const RenderQuestion: React.FC<IQuestionPropsV2> = ({ questions }: IQuestionPropsV2) => {
  const [randomIndex, setRandomIndex] = useState<number>(Math.floor((Math.random() * questions.length)));
  const [isCorrect, setIsCorrect] = useState<string | undefined>(undefined);
  const [blockAnswer, setBlockAnswer] = useState<boolean>(false);
  const [indexesAnswered, setIndexesAnswered] = useState<number[]>([randomIndex]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateNewQuestionIndex = async (): Promise<number> => {
    const newNumber = Math.floor((Math.random() * questions.length));
    if (indexesAnswered.includes(newNumber)) return generateNewQuestionIndex();
    setIndexesAnswered([...indexesAnswered, newNumber])
    return newNumber;
  }

  const buildNextQuestion = async () => {
    const nextQuestionIndex = await generateNewQuestionIndex();
    const addIndex = [...indexesAnswered, nextQuestionIndex];
    setRandomIndex(nextQuestionIndex);
    setBlockAnswer(false);
    setIsCorrect(undefined);
    setIsLoading(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    setIsCorrect(event.target.value);
    setBlockAnswer(true);
    setTimeout(() => {
      buildNextQuestion();
    }, 4500)
  };

  const returnColor = (rightAnswer: number): string => {
    if (blockAnswer && !rightAnswer) return 'green';
    if (blockAnswer && rightAnswer) return 'red';
    return 'white'
  }

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
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Image
          alt='image question'
          src={question.content[0]}
          width={180}
          height={150}
        />
        <Typography sx={{ color: 'white', marginTop: '2%' }}>{question.content[1] as string}</Typography>
      </Box>
    )
  }

  const buildAnswers = (answersList: IAnswers[]): JSX.Element => {
    const NUMBER_OF_ANSWERS = 4;
    if (answersList.length === NUMBER_OF_ANSWERS) {
      return (
        <FormControl>
          <RadioGroup
            value={isCorrect !== undefined ? isCorrect : null}
            onChange={handleChange}
          >
            {answersList.map((answer: IAnswers, i: number) => (
              <FormControlLabel
                key={i}
                value={answer.correct.toString()}
                onClick={(e: any) => console.log(e.target.value)}
                control={
                  <Radio
                    color='error'
                    disabled={blockAnswer}
                    sx={{
                      color: 'blue',
                      '&.Mui-checked': {
                        color: 'blue',
                      },
                      '&.Mui-disabled': {
                        color: returnColor(answer.correct)
                      }
                    }}
                />
                }
                label={<Typography sx={{ '&.MuiTypography-body1': { color: returnColor(answer.correct) } }} >{answer.data}</Typography>} />
              ))
            }
          </RadioGroup>
        </FormControl>
      )
    } else {
      return <Box>Erro</Box>
    }
  }

  return (
    <Box
      sx={{
        margin: '2% auto 0 auto',
        width: '90vw',
        height: '40vh'
      }}
    >
      <Box
        sx={{
          // border: '1px solid red',
          margin: '4% auto 0 auto',
          width: '90vw',
          height: '30vh'
        }}
      >
        { questions.length && buildQuestion(questions[randomIndex]) }
      </Box>
      <Box
        sx={{
          // border: '1px solid green',
          margin: '2% auto 0 auto',
          width: '90vw',
          height: '30vh'
        }}
      >
        { questions.length && buildAnswers(questions[randomIndex].options) }
      </Box>
      {isLoading && (
        <Box>
          <LinearProgress color='info' />
        </Box>
      )}
    </Box>
  )
};

export default RenderQuestion;

import { IAnswers, IQuestionPropsV2, IQuestionsProps } from '@/interfaces';
import { Box, Button, CircularProgress, Container, FormControl, FormControlLabel, LinearProgress, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import path from 'path';

const RenderQuestion: React.FC<IQuestionPropsV2> = ({ questions, finishGame }: IQuestionPropsV2) => {
  const [randomIndex, setRandomIndex] = useState<number>(0);
  const [copyQuestions, setCopyQuestions] = useState<IQuestionsProps[]>([]);
  const [isCorrect, setIsCorrect] = useState<string | undefined>(undefined);
  const [blockAnswer, setBlockAnswer] = useState<boolean>(false);
  const [responsesLength, setResponsesLength] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mainLoading, setMainLoading] = useState<boolean>(true);

  useEffect(() => {
    const copyInfos = [...questions];
    const random = Math.floor((Math.random() * copyInfos.length));
    setCopyQuestions(copyInfos);
    setRandomIndex(random);
    setResponsesLength(['.'])
    setMainLoading(false);
  }, []);

  const endGame = (): void => finishGame(true)

  const generateRandomIndex = (list: IQuestionsProps[]): number => Math.floor((Math.random() * list.length));

  const buildNextQuestion = async (control: string[]) => {
    copyQuestions.splice(randomIndex, 1);
    const nextQuestionIndex = generateRandomIndex(copyQuestions);
    setResponsesLength(control)
    setRandomIndex(nextQuestionIndex);
    setBlockAnswer(false);
    setIsCorrect(undefined);
    setIsLoading(false);
  }
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCorrect(event.target.value);
    setBlockAnswer(true);
    const TOTAL_RESPONSES = 11;
    const isFinished = [...responsesLength, '.'];
  if (isFinished.length === TOTAL_RESPONSES) {
    setTimeout(() => {
      endGame();
    }, 1000);
    return
  }
    setIsLoading(true);
    setTimeout(() => {
      buildNextQuestion(isFinished);
    }, 2500)
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

  if (mainLoading) {
    return (
      <Box
        sx={{
          color: 'white',
          margin: '2% auto 0 auto',
          width: '90vw',
          height: '40vh'
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <CircularProgress color='inherit' />
      </Box>
    )
  } else {
      return (
        <Box
          sx={{
            margin: '2% auto 0 auto',
            width: '90vw',
            height: '40vh'
          }}
        >
          <Box
            sx={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}
            display='flex'
            justifyContent='center'
          >
            {`${responsesLength.length}/10`}
          </Box>
          <Box
            sx={{
              // border: '1px solid red',
              margin: '4% auto 0 auto',
              width: '90vw',
              height: '30vh'
            }}
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            { copyQuestions.length && buildQuestion(copyQuestions[randomIndex]) }
          </Box>
          <Box
            sx={{
              // border: '1px solid green',
              margin: '2% auto 0 auto',
              width: '90vw',
              height: '30vh'
            }}
          >
            { copyQuestions.length && buildAnswers(copyQuestions[randomIndex].options) }
          </Box>
          {isLoading && (
            <Stack sx={{ color: 'white' }}>
              <LinearProgress color='inherit' />
            </Stack>
          )}
        </Box>
      )
  }

};

export default RenderQuestion;

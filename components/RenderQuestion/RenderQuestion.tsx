import React, { useEffect, useState } from 'react';
import { IAnswers, IQuestions, IRenderQuestionProps } from '../../interfaces';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  LinearProgress,
  Radio,
  RadioGroup,
  Stack,
  Typography
} from '@mui/material';
import Image from 'next/image';

const RenderQuestion: React.FC<IRenderQuestionProps> = ({
  questions,
  responses,
  countResponse,
  finishGame,
  addPoints,
  points,
  mainLoading,
  setMainLoading,
  restoreGame,
  mode
}: IRenderQuestionProps) => {
  const [copyQuestions, setCopyQuestions] = useState<IQuestions[]>([]);
  const [isCorrect, setIsCorrect] = useState<string | undefined>(undefined);
  const [blockAnswer, setBlockAnswer] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [controlList, setControlList] = useState<IQuestions[]>([]);
  const [roundLimit, setRoundLimit] = useState<number>(0);
  const [roundsCount, setRoundsCount] = useState<number | null>(null);
  const [nextQuestionBtn, setNextQuestionBtn] = useState<boolean>(false);

  useEffect(() => {
    if (questions.length && !controlList.length) {
      // const QUESTIONS_PER_ROUND = mode === 'Standard' ? 10 : 2;
      const QUESTIONS_PER_ROUND = 10;
      setRoundLimit(Math.floor(questions.length / QUESTIONS_PER_ROUND));
      setRoundsCount(1);
      resetStateFromList(questions)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions])

  useEffect(() => {
    setNextQuestionBtn(false);
    if (!!roundsCount) {
      if (roundsCount >= roundLimit) {
        setRoundsCount(1);
        // const QUESTIONS_PER_ROUND = mode === 'Standard' ? 10 : 2;
        const QUESTIONS_PER_ROUND = 10;
        setRoundLimit(Math.floor(questions.length / QUESTIONS_PER_ROUND));
        resetStateFromList(questions)
      } else {
        setRoundsCount(roundsCount + 1);
        resetStateFromList(controlList);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restoreGame]);

  const resetStateFromList = (list: IQuestions[]) => {
    const copyCurrentQuestions = [...list];
    const getQuestionToShow = getRandomQuestion(copyCurrentQuestions);
    setControlList(copyCurrentQuestions);
    const shuffleQuestion = shuffleAnswers(getQuestionToShow);
    setCopyQuestions(shuffleQuestion);
    countResponse(['.']);
    setBlockAnswer(false);
    setIsCorrect(undefined);
    setMainLoading(false);
  }

  const getRandomQuestion = (list: IQuestions[]): IQuestions[] => {
    const currentQuestion = [];
    const randomIndex = Math.floor(Math.random() * list.length);
    currentQuestion.push(list[randomIndex]);
    list.splice(randomIndex, 1);
    return currentQuestion
  }

  const shuffleAnswers = (questionsList: IQuestions[]): IQuestions[] => {
    questionsList.forEach((answersList: IQuestions, i: number) => {
      const newList: IAnswers[] = [];
      const copyAnswers = [...answersList.options];
      answersList.options.forEach(() => {
        const randomIndex = generateRandomIndex(copyAnswers);
        newList.push(copyAnswers[randomIndex])
        copyAnswers.splice(randomIndex, 1)
      });
      answersList.options = newList
    })
    return questionsList;
  }

  const endGame = (): void => {
    finishGame(true);
    setIsLoading(false);
  }

  const generateRandomIndex = (list: Array<IAnswers | IQuestions>): number => Math.floor((Math.random() * list.length));

  const newNextQuestion = (control: string[]) => {
    const nextQuestionIndex = generateRandomIndex(controlList);
    const changeReference = [...controlList];
    setCopyQuestions([controlList[nextQuestionIndex]]);
    changeReference.splice(nextQuestionIndex, 1);
    setControlList(changeReference);
    countResponse(control)
    setBlockAnswer(false);
    setIsCorrect(undefined);
    setNextQuestionBtn(false);
    setIsLoading(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCorrect(event.target.value);
    if (!(Number(event.target.value))) addPoints(points + 1)
    setBlockAnswer(true);
    setNextQuestionBtn(true);
  };

  const handleAnswer = () => {
    // const TOTAL_RESPONSES = mode === 'Standard' ? 11 : 3;
    const TOTAL_RESPONSES = 11
    const isFinished = [...responses, '.'];
    if (isFinished.length === TOTAL_RESPONSES) {
      setIsLoading(true)
      setTimeout(() => {
        endGame();
      }, 500);
      return
    }
    callNextQuestion(isFinished)
  }

  const callNextQuestion = (responseList: string[]) => {
    setIsLoading(true);
    setTimeout(() => {
      newNextQuestion(responseList);
    }, 500)
  }

  const getRightText = (): string => {
    // const TOTAL_RESPONSES = mode === 'Standard' ? 11 : 3;
    const TOTAL_RESPONSES = 11
    const isFinished = [...responses, '.'];
    if (isFinished.length === TOTAL_RESPONSES) {
      return 'Finalizar Teste'
    }
    return 'Próxima Pergunta'
  }

  const returnColor = (rightAnswer: number): string => {
    if (blockAnswer && !rightAnswer) return 'green';
    if (blockAnswer && rightAnswer) return 'red';
    return 'white'
  }

  const buildQuestion = (question: IQuestions): JSX.Element => {
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
          className='question-image'
        />
        <Typography
          sx={{
            color: 'white',
            marginTop: '2%',
            fontSize: { xs: '18px', sm: '20px', md: '20px', lg: '22px', xl: '24px' }
          }}
        >
          {question.content[1] as string}
        </Typography>
      </Box>
    )
  }

  const buildAnswers = (answersList: IAnswers[]): JSX.Element => {
    const NUMBER_OF_ANSWERS = 4;
    if (answersList.length === NUMBER_OF_ANSWERS) {
      return (
        <FormControl
          sx={{
            width: { xs: '90vw', sm: '60vw', md: '50vw', lg: '20vw', xl: '15vw' },
            height: { xs: '30vh', sm: '30vh', md: '30vh', lg: '30vh', xl: '30vh' },
          }}
        >
          <RadioGroup
            value={isCorrect !== undefined ? isCorrect : null}
            onChange={handleChange}
            // sx={{ height: '100%' }}
          >
            {answersList.map((answer: IAnswers, i: number) => (
              <FormControlLabel
                key={i}
                value={answer.correct.toString()}
                // sx={{ borderBottom: '1px solid rgb(131, 130, 130)'}}
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
                      },
                      margin: '2% 0 2% 0',
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      '&.MuiTypography-body1': { color: returnColor(answer.correct) },
                      // padding: 1
                    }}
                  >
                    {answer.data}
                  </Typography>
                }
              />
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
          margin: '-1% auto 0 auto',
          width: '90vw',
          height: '40vh'
        }}
      >
        <Box
          sx={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          <Typography variant='h6' fontWeight='bold'>
            {/* {`${responses.length}/${mode === 'Standard' ? '10' : '2'}`} */}
            {`${responses.length}/10`}
          </Typography>
          {nextQuestionBtn && (
            <Button
              variant='contained'
              size='small'
              onClick={handleAnswer}
              sx={{
                backgroundColor: 'white',
                color: 'black',
                '&.MuiButtonBase-root:active': {
                  backgroundColor: 'white'
                },
                '&.MuiButtonBase-root:hover': {
                  backgroundColor: 'white',
                  color: 'white'
                }
              }}
            >
              {isLoading ? <CircularProgress sx={{ color: 'black' }} size={25} /> : getRightText()}
            </Button>
          )
          }
        </Box>
        <Box
          sx={{
            margin: '0 auto 0 auto',
            width: { xs: '80vw', sm: '65vw', md: '50vw', lg: '45vw', xl: '40vw' },
            height: { xs: '40vh', sm: '40vh', md: '40vh', lg: '40vh', xl: '42vh' },
          }}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          {copyQuestions.length && buildQuestion(copyQuestions[0])}
        </Box>
        <Box
          sx={{
            margin: '-16% auto 0 auto',
            width: '90vw',
            height: '40vh',
            // border: '1px solid red'
          }}
          display='flex'
          justifyContent='center'
        >
          {copyQuestions.length && buildAnswers(copyQuestions[0].options)}
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

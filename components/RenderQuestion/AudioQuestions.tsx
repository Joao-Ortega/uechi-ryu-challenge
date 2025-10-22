import { IAnswers, IQuestions, IRenderQuestionProps } from '@/interfaces';
import { Box, Button, CircularProgress, FormControl, FormControlLabel, LinearProgress, Radio, RadioGroup, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import Recorder from '../Recorder/Recorder';

const AudioQuestions: React.FC<IRenderQuestionProps> = ({
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
	const [disableBtnNextQuestion, setDisableBtnNextQuestion] = useState<boolean>(false);
	const [aiVerification, setAiVerification] = useState<string>('');
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "parcial">("idle");

	useEffect(() => {
		if (questions.length && !controlList.length) {
			const QUESTIONS_PER_ROUND = mode === 'DAN' ? 2 : 10;
			// const QUESTIONS_PER_ROUND = 10;
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
				const QUESTIONS_PER_ROUND = mode === 'DAN' ? 2 : 10;
				// const QUESTIONS_PER_ROUND = 10;
				setRoundLimit(Math.floor(questions.length / QUESTIONS_PER_ROUND));
				resetStateFromList(questions)
			} else {
				setRoundsCount(roundsCount + 1);
				resetStateFromList(controlList);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [restoreGame]);

	useEffect(() => {
		if (aiVerification) {
			handleChange(aiVerification)
		}
	}, [aiVerification])

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
		const copyTest = JSON.parse(JSON.stringify([...questionsList]))
		const newList: IAnswers[] = [];

		copyTest.forEach((answersList: IQuestions, i: number) => {
			const copyAnswers = [...answersList.options];
			answersList.options.forEach(() => {
				const randomIndex = generateRandomIndex(copyAnswers);
				newList.push(copyAnswers[randomIndex])
				copyAnswers.splice(randomIndex, 1)
			});
		})
		copyTest[0].options = newList
		return copyTest;
	}

	const endGame = (): void => {
		finishGame(true);
		setIsLoading(false);
	}

	const generateRandomIndex = (list: Array<IAnswers | IQuestions>): number => Math.floor((Math.random() * list.length));

	const newNextQuestion = (control: string[]) => {
		const nextQuestionIndex = generateRandomIndex(controlList);
		const changeReference = [...controlList];
		const shuffleQuestion = shuffleAnswers([controlList[nextQuestionIndex]]);
		setCopyQuestions(shuffleQuestion);
		changeReference.splice(nextQuestionIndex, 1);
		setControlList(changeReference);
		countResponse(control)
		setBlockAnswer(false);
		setIsCorrect(undefined);
		setNextQuestionBtn(false);
		setIsLoading(false);
	}

	const handleChange = (result: string) => {
		setIsCorrect(result);
		if (!(Number(result))) addPoints(points + 1)
		setNextQuestionBtn(true);
	};

	const handleAnswer = () => {
		setDisableBtnNextQuestion(true)
		const TOTAL_RESPONSES = mode === 'DAN' ? 3 : 11;
		// const TOTAL_RESPONSES = 11
		const isFinished = [...responses, '.'];
		setStatus('idle')
		setAiVerification('')
		if (isFinished.length === TOTAL_RESPONSES) {
			setIsLoading(true)
			setTimeout(() => {
				setDisableBtnNextQuestion(false)
				endGame();
			}, 500);
			return
		}
		callNextQuestion(isFinished)
	}

	const callNextQuestion = (responseList: string[]) => {
		setIsLoading(true);
		setTimeout(() => {
			setDisableBtnNextQuestion(false)
			newNextQuestion(responseList);
		}, 500)
	}

	const getRightText = (): string => {
		const TOTAL_RESPONSES = mode === 'DAN' ? 3 : 11;
		// const TOTAL_RESPONSES = 11
		const isFinished = [...responses, '.'];
		if (isFinished.length === TOTAL_RESPONSES) {
			return 'Finalizar Teste'
		}
		return 'Próxima Pergunta'
	}

	const buildQuestion = (question: IQuestions): JSX.Element => {
		if (question.type === 'text' && typeof question.content === 'string') {
			return (
				<Typography
					variant='h6'
					sx={{
						textAlign: 'center',
						color: 'white',
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
					style={{ borderRadius: '6px' }}
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
					margin: '0 auto',
					width: '90vw',
					height: '80vh',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				{isLoading ? (
					<Stack sx={{ color: 'white' }}>
						<CircularProgress size={50} color='inherit' />
					</Stack>
				) : (
					<Box>
						<Box
							sx={{
								color: 'white',
								fontWeight: 'bold',
								fontSize: '20px',
							}}
							display='flex'
							justifyContent='center'
							alignItems='center'
							flexDirection='column'
						>
							<Typography variant='h6' fontWeight='bold'>
								{`${responses.length}/${mode === 'DAN' ? '2' : '10'}`}
								{/* {`${responses.length}/10`} */}
							</Typography>
							{nextQuestionBtn && (
								<Button
									variant='contained'
									size='small'
									disabled={disableBtnNextQuestion}
									onClick={handleAnswer}
									sx={{
										backgroundColor: 'white',
										color: 'black',
									}}
								>
									{getRightText()}
								</Button>
							)
							}
						</Box>
						<Box
							sx={{
								minHeight: '30%',
								// border: '1px solid white'
							}}
							display='flex'
							alignItems='center'
							justifyContent='center'
						>
							{copyQuestions.length && buildQuestion(copyQuestions[0])}
						</Box>
						<Box
							sx={{
								width: '90vw',
								minHeight: '40%',
								maxWidth: '700px',
								// paddingLeft: 1.5
							}}
							display='flex'
							justifyContent='space-evenly'
							alignItems='flex-start'
						>
							<Recorder
								correctAnswer={copyQuestions[0].options.find((answer) => answer.correct === 0)?.data ?? ''}
								setAiVerification={setAiVerification}
								status={status}
								setStatus={setStatus}
							/>
						</Box>
					</Box>
				)}
			</Box>
		)
	}

};

export default AudioQuestions;

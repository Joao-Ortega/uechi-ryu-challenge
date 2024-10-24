'use client'
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Logo from '../../app/assets/images/logo-dpedra.jpg';
import Image from 'next/image';
import RenderQuestion from '../RenderQuestion/RenderQuestion';
import { adultsQuestions, challenges } from '../../util/questions';
import FinishedGameModal from '../Modal/FinishedGameModal';
import { IQuestions } from '@/interfaces';

const Game = () => {
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [responsesLength, setResponsesLength] = useState<string[]>([]);
  const [restoreGame, setRestoreGame] = useState<boolean>(false);
  const [mainLoading, setMainLoading] = useState<boolean>(true);
  const [safeArray, setSafeArray] = useState<IQuestions[]>([]);
  const [mode, setMode] = useState<string>('');

  useEffect(() => {
    if (verifyLocal()) {
      setMode('Black Belt');
      setSafeArray([...adultsQuestions]);
    } else {
      setMode('Standard')
      setSafeArray([...challenges]);
    }
  }, []);

  const verifyLocal = () => localStorage.getItem('koto-simon');

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        padding={2}
      >
        <Image
          width={100}
          height={100}
          alt='logo'
          src={Logo}
        />
      </Box>
      <RenderQuestion
        responses={responsesLength}
        countResponse={setResponsesLength}
        points={points}
        addPoints={setPoints}
        questions={safeArray}
        finishGame={setGameEnded}
        mainLoading={mainLoading}
        setMainLoading={setMainLoading}
        restoreGame={restoreGame}
        mode={mode}
      />
      <FinishedGameModal
        currentState={restoreGame}
        restart={setRestoreGame}
        points={points}
        setPoints={setPoints}
        open={gameEnded}
        setOpen={setGameEnded}
        setMainLoading={setMainLoading}
        mode={mode}
      />
    </Box>
  )
};

export default Game;

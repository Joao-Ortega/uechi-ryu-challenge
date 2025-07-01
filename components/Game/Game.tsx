'use client'
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Logo from '../../app/assets/images/newLogo.png';
import Image from 'next/image';
import RenderQuestion from '../RenderQuestion/RenderQuestion';
import { adultsOrangeDarkBlue, adultsWhiteYellow, challenges, kotoSimon } from '../../util/questions';
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
  
  const verifyLocal = () => localStorage.getItem('key');

  useEffect(() => {
    const gameType = verifyLocal()
    switch (gameType) {
      case 'kids-white-orange':
      case 'btn-kids':
        setMode('Standard')
        setSafeArray([...challenges])
        break;
      case 'white-yellow':
        setMode('Standard')
        setSafeArray([...adultsWhiteYellow])
        break;
      case 'orange-darkBlue':
        setMode('Standard')
        setSafeArray([...adultsOrangeDarkBlue])
        break;
      case 'brown-black':
        setMode('Standard')
        setSafeArray([...kotoSimon])
        break
      default:
        setMode('Standard')
        setSafeArray([...challenges])
        break;
    }
  }, []);


  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
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

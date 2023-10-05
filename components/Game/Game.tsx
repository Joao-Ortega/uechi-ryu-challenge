'use client'
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Logo from '../../app/assets/images/logo-dpedra.jpg';
import Image from 'next/image';
import RenderQuestion from '../RenderQuestion/RenderQuestion';
import challenges from '@/util/questions';
import FinishedGameModal from '../Modal/FinishedGameModal';

const Game = () => {
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [responsesLength, setResponsesLength] = useState<string[]>([]);
  const [restoreGame, setRestoreGame] = useState<boolean>(false);
  const [mainLoading, setMainLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   console.log('oiii')

  // }, [forceUpdate])

  return (
    <Box>
      <Box
        sx={{
          // border: '1px solid red'
          }}
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
        questions={challenges}
        finishGame={setGameEnded}
        mainLoading={mainLoading}
        setMainLoading={setMainLoading}
        restoreGame={restoreGame}
      />
      <FinishedGameModal
        restart={setRestoreGame}
        points={points}
        setPoints={setPoints}
        open={gameEnded}
        setOpen={setGameEnded}
        setMainLoading={setMainLoading}
      />
    </Box>
  )
};

export default Game;

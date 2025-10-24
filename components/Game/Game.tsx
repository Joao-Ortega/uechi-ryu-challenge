'use client'
import React, { useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import Logo from '../../app/assets/images/newLogo.png';
import Image from 'next/image';
import RenderQuestion from '../RenderQuestion/RenderQuestion';
import { adultsOrangeDarkBlue, adultsWhiteYellow, challenges, danTest, kotoSimon, teensAdultsTest } from '../../util/questions';
import FinishedGameModal from '../Modal/FinishedGameModal';
import { IQuestions } from '@/interfaces';
import { useRouter } from 'next/navigation';
import AudioQuestions from '../RenderQuestion/AudioQuestions';

const Game = () => {
  const [gameEnded, setGameEnded] = useState<boolean>(false);
  const [points, setPoints] = useState<number>(0);
  const [responsesLength, setResponsesLength] = useState<string[]>([]);
  const [restoreGame, setRestoreGame] = useState<boolean>(false);
  const [mainLoading, setMainLoading] = useState<boolean>(true);
  const [safeArray, setSafeArray] = useState<IQuestions[]>([]);
  const [mode, setMode] = useState<string>('');
  const router = useRouter();

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
      case 'teens-adults-exam':
        setMode('Standard')
        setSafeArray([...teensAdultsTest])
        break
      case 'DAN':
        setMode('DAN')
        setSafeArray([...danTest])
        break;
      default:
        setMode('Standard')
        setSafeArray([...challenges])
        break;
    }
  }, []);


  return (
    <Box>
      <Box
        display="grid"
        padding={2}
        sx={{
          maxWidth: '400px',
          margin: '0 auto'
        }}
      >
        <Button
          sx={{
            justifySelf: 'flex-start',
            alignSelf: 'center',
            color: 'white',
            border: '1px solid white',
            borderRadius: '6px',
          }}
          onClick={() => {
            setMainLoading(true)
            localStorage.clear();
            router.push('/')
          }}
          size='small'
        >
          menu
        </Button>
        <Image
          width={100}
          height={100}
          alt="logo"
          src={Logo}
          style={{ justifySelf: 'center' }}
        />
      </Box>
      {mode === 'DAN' ? (
        <AudioQuestions
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
      ) : (
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
      )}
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

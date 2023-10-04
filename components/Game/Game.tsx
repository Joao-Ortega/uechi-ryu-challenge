'use client'
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Logo from '../../app/assets/images/logo-dpedra.jpg';
import Image from 'next/image';
import RenderQuestion from '../RenderQuestion/RenderQuestion';
import challenges from '@/util/questions';

const Game = () => {
  // const [indexesAnswered, setIndexesAnswered] = useState<number[]>([]);

  // useEffect(() => {
  //   setIndexesAnswered([])
  // },[])

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
      <RenderQuestion questions={challenges} />
    </Box>
  )
};

export default Game;

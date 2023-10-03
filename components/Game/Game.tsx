import React from 'react';
import { Box } from '@mui/material';
import Logo from '../../app/assets/images/logo-dpedra.jpg';
import Image from 'next/image';
import RenderQuestion from '../RenderQuestion/RenderQuestion';

const Game = () => {
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
      <RenderQuestion />
    </Box>
  )
};

export default Game;

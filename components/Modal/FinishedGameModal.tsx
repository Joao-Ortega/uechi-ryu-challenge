import React from 'react';
import { IFinishedGameProps } from '../../interfaces';
import { Box, Button, Modal, Typography } from '@mui/material';
import oss from '../../app/assets/gifs/osu.gif';
import Image from 'next/image';


const FinishedGameModal = ({
  currentState,
  open,
  setOpen,
  points = 0,
  setPoints,
  restart,
  setMainLoading,
  mode
}: IFinishedGameProps) => {

  const restoreGame = () => {
    setMainLoading(true);
    restart(!currentState);
    setPoints(0);
    setOpen(false);
  }

  return (
    <Modal
      open={open}
    >
      <Box
        sx={{
          height: '90vh',
          width: '100vw'
        }}
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Box
          sx={{
            backgroundColor: 'white',
            borderRadius: '8px',
            height: '50vh',
            width: { xs: '80vw', sm: '60vw', md: '50vw', lg: '40vw', xl: '30vw' }
          }}
          display='flex'
          alignItems='center'
          flexDirection='column'
        >
          <Typography
            sx={{ margin: '5% auto 1.5% auto' }}
            variant='h5'
          >
            Teste Completo
          </Typography>
          <Image
            alt='Artista marcial fazendo reverência'
            src={oss}
            width={120}
            height={150}
          />
          <Box
            display='flex'
            alignItems='center'
            flexDirection='column'
          >
            <Typography fontSize={18} variant='button' sx={{ margin: '1.5% auto 0 auto' }} >Pontuação</Typography>
            <Box display='flex'>
              <Typography
                fontSize={22}
                sx={{
                  // color: points === (mode === 'Standard' ? 5 : 1) ? 'black' : points < (mode === 'Standard' ? 5 : 1) ? 'red' : 'green',
                  color: points === 5 ? 'black' : points < 5  ? 'red' : 'green',
                  fontWeight: 900 }}
              >
                {points}
              </Typography>
              <Typography fontSize={22} sx={{ fontWeight: 900 }}>/10</Typography>
              {/* <Typography fontSize={22} sx={{ fontWeight: 900 }}>{mode === 'Standard' ? '/10'  : '/2'}</Typography> */}
            </Box>
            <Button
              variant='contained'
              size='small'
              sx={{ marginTop: '5%', backgroundColor: 'black' }}
              onClick={restoreGame}
            >
              Reiniciar Teste
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  )
};

export default FinishedGameModal;

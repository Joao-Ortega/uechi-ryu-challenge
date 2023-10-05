import React from 'react';
import { IFinishedGameProps } from '@/interfaces';
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
  setMainLoading
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
      // onClose={() => {}}
    >
      <Box
        sx={{
          // backgroundColor: 'white',
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
            width: '80vw'
          }}
          display='flex'
          alignItems='center'
          flexDirection='column'
        >
          <Typography
            sx={{ margin: '2% auto 1.5% auto' }}
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
              <Typography fontSize={22} sx={{ color: 'green', fontWeight: 900 }}>{points}</Typography>
              <Typography fontSize={22} sx={{ fontWeight: 900 }}>/10</Typography>
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

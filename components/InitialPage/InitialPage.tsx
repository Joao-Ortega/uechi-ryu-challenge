'use client'
import { Box, Button, TextField } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function InitialPage() {
  const [isCLicked, setIsClicked] = useState<boolean>(false);
  const router = useRouter();

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      height='90vh'
      width='100vw'
    >
      <Box
        display='flex'
        flexDirection='column'
        height='15vh'
        justifyContent='space-evenly'
        width='55vw'
        sx={{ border: '1px solid red' }}
      >
        <Button
          variant='contained'
          onClick={() => router.push('/game')}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            '& .MuiButtonBase-root:active': {
              backgroundColor: 'red'
            }
          }}
        >
          Perguntas Gerais
        </Button>
        <Button
          onClick={() => setIsClicked(!isCLicked)}
          variant='contained'
          sx={{ backgroundColor: 'white', color: 'black' }}
        >
          Koto Simon
        </Button>
      </Box>
      {isCLicked && (
        <Box
          sx={{ margin: "2% 0 0 0" }}
        >
          <TextField
            placeholder='Digite a Senha'
            size='small'
            sx={{ backgroundColor: 'white', width: '55vw', borderRadius: '8px' }}
          />
        </Box>
      )}
    </Box>
  )
}

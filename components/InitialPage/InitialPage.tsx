'use client'
import { Box, Button, CircularProgress, TextField } from '@mui/material'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

export default function InitialPage() {
  const [isCLicked, setIsClicked] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (buttonLoading) {
      router.push('/game')
    }
  }, [buttonLoading]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
    if (e.target.value.trim().toUpperCase() === 'OKIKUKAI') {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }

  const handleKotoSimonGame = () => {
    const pass = password.toUpperCase();
    localStorage.setItem('koto-simon', pass);
    router.push('/game')
  }

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
      >
        <Button
          variant='contained'
          onClick={() => {
            localStorage.clear();
            setButtonLoading(true)
          }}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            '&.MuiButtonBase-root:active': {
              backgroundColor: 'black'
            },
            '&.MuiButtonBase-root:hover': {
              backgroundColor: 'black',
              color: 'white'
            }
          }}
        >
          {buttonLoading ?
            <CircularProgress
              sx={{ color: 'black' }}
              size={25}
            /> :
            'Exame Infantil'
          }
        </Button>
        <Button
          onClick={() => {
            localStorage.setItem('koto-simon', '123');
            setButtonLoading(true)
          }}
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: isCLicked ? 'red' : 'black',
            '&.MuiButtonBase-root:hover': {
              backgroundColor: 'white',
            }
          }}
        >
          {buttonLoading ?
            <CircularProgress
              sx={{ color: 'black' }}
              size={25}
            /> :
            'Exame Teens/Adultos'
          }
        </Button>
        {/* <Button
          onClick={() => setIsClicked(!isCLicked)}
          variant='contained'
          sx={{
            backgroundColor: 'white',
            color: isCLicked ? 'red' : 'black',
            '&.MuiButtonBase-root:hover': {
              backgroundColor: 'white',
            }
          }}
        >
          Koto Simon
        </Button> */}
      </Box>
      {isCLicked && (
        <Box
          sx={{ margin: "2% 0 0 0" }}
          display='flex'
          flexDirection='column'
        >
          <TextField
            placeholder='Digite a Senha'
            size='small'
            onChange={handleChange}
            value={password}
            sx={{ backgroundColor: 'white', width: '55vw', borderRadius: '8px' }}
          />
          <Button
            variant='outlined'
            disabled={isDisable}
            onClick={handleKotoSimonGame}
            sx={{
              backgroundColor: 'black',
              border: 'black',
              color: 'white',
              '&.MuiButtonBase-root:active': {
                backgroundColor: 'black'
              },
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'black',
                color: 'white',
                border: 'black'
              },
              '&.MuiButtonBase-root:disabled': {
                backgroundColor: 'black',
                color: 'black'
              }
            }}
          >
            Entrar
          </Button>
        </Box>
      )}
    </Box>
  )
}

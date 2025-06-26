'use client'
import { Box, Button, CircularProgress, TextField } from '@mui/material'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Logo from '../../app/assets/images/newLogo.png';

export default function InitialPage() {
  const [isCLicked, setIsClicked] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('OKIKUKAI');
  const [type, setType] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    if (!type) return
    if (type === '1') {
      const pass = password.toUpperCase();
      localStorage.setItem('koto-simon', pass);
    }
    router.push('/game')
  }, [type]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
    if (e.target.value.trim().toUpperCase() === 'OKIKUKAI') {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }

  const handleKotoSimonGame = () => {
    router.push('/game')
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      height='100vh'
      sx={{ position: 'relative' }}
    >
      <Image
        width={180}
        height={180}
        alt='logo'
        src={Logo}
        style={{ marginTop: -100 }}
      />
      {buttonLoading ? (
        <CircularProgress
          sx={{ color: 'white' }}
          size={40}
        />
      ) : (
        <Box
          display='flex'
          flexDirection='column'
          height='150px'
          sx={{ width: '85%', maxWidth: '350px' }}
          justifyContent='space-evenly'
        >
          <Button
            variant='contained'
            id='0'
            onClick={(e) => {
              const button = e.target as HTMLButtonElement
              setType(button.id)
              localStorage.clear();
              setButtonLoading(true)
            }}
            sx={{
              backgroundColor: 'white',
              color: 'black',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'rgba(255, 255, 255)',
                color: 'red'
              },
              width: '100%'
            }}
          >
            Perguntas Kids
          </Button>
          <Button
            onClick={(e) => {
              const button = e.target as HTMLButtonElement
              setType(button.id)
              handleKotoSimonGame()
            }}
            variant='contained'
            id='1'
            sx={{
              backgroundColor: 'white',
              color: 'black',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'rgba(255, 255, 255)',
                color: 'red'
              },
              width: '100%'
            }}
          >
            Perguntas Teens / Adultos
          </Button>
        </Box>
      )}
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

'use client'
import { Box, Button, CircularProgress, InputBase, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Logo from '../../app/assets/images/newLogo.png';
import WhiteBelt from '../../app/assets/images/whiteTest.png';
import { adultsBrownAndBlack, adultsOrangeToDarkBlue, adultsWhiteToYellow, beltColorsKids } from '@/util/beltColors';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function InitialPage() {
  const [isCLicked, setIsClicked] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  const [isDisable, setIsDisable] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPassword(e.target.value);
    if (e.target.value.trim().toUpperCase() === `${process.env.NEXT_PUBLIC_PASSWORD}`) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }

  const classNameToLocalAndRedirect = (btnClass: string) => {
    localStorage.setItem('key', btnClass);
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
        width={150}
        height={150}
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
          height='420px'
          sx={{ width: '85%', maxWidth: '350px' }}
          justifyContent='space-evenly'
        >
          <Typography sx={{ color: 'white', margin: '0 auto 0 auto' }}>KIDS</Typography>
          <Button
            variant='contained'
            className='kids-white-orange'
            onClick={() => {
              setButtonLoading(true)
              classNameToLocalAndRedirect('kids-white-orange')
            }}
            sx={{
              backgroundColor: 'black',
              border: '1px solid rgb(124, 123, 120)',
              color: 'black',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'rgba(0, 0, 0)',
              },
              // width: '60%',
              margin: '0 auto 0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap'
            }}
          >
            {beltColorsKids.map((filterStr) => (
              <Image
                key={filterStr}
                width={80}
                height={30}
                alt='logo'
                src={WhiteBelt}
                style={{
                  filter: filterStr,
                }}
              />
            ))}
          </Button>
          <Typography sx={{ color: 'white', margin: '0 auto 0 auto' }}>TEEN/ADULTOS</Typography>
          <Button
            variant='contained'
            className='white-yellow'
            onClick={() => {
              setButtonLoading(true)
              classNameToLocalAndRedirect('white-yellow')
            }}
            sx={{
              backgroundColor: 'black',
              border: '1px solid rgb(124, 123, 120)',
              color: 'black',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'rgba(0, 0, 0)',
              },
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >
            {adultsWhiteToYellow.map((filterStr) => (
              <Image
                key={filterStr}
                width={80}
                height={30}
                alt='logo'
                src={WhiteBelt}
                style={{
                  filter: filterStr,
                }}
              />
            ))}
          </Button>
          <Button
            variant='contained'
            className='orange-darkBlue'
            onClick={() => {
              setButtonLoading(true)
              classNameToLocalAndRedirect('orange-darkBlue')
            }}
            sx={{
              backgroundColor: 'black',
              border: '1px solid rgb(124, 123, 120)',
              color: 'black',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'rgba(0, 0, 0)',
              },
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >
            {adultsOrangeToDarkBlue.map((filterStr) => (
              <Image
                key={filterStr}
                width={80}
                height={30}
                alt='logo'
                src={WhiteBelt}
                style={{
                  filter: filterStr,
                }}
              />
            ))}
          </Button>
          <Button
            variant='contained'
            className='brown-black'
            onClick={() => {
              setButtonLoading(true)
              classNameToLocalAndRedirect('brown-black')
            }}
            sx={{
              backgroundColor: 'rgb(38, 38, 38)',
              border: '1px solid rgb(120, 114, 114)',
              color: 'black',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'rgb(98, 89, 36)',
              },
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly'
            }}
          >
            {adultsBrownAndBlack.map((filterStr) => (
              <Image
                key={filterStr}
                width={85}
                height={35}
                alt='logo'
                src={WhiteBelt}
                style={{
                  filter: filterStr,
                }}
              />
            ))}
          </Button>
          <Button
            variant='contained'
            onClick={() => {
              setButtonLoading(true)
              classNameToLocalAndRedirect('btn-kids')
            }}
            sx={{
              backgroundColor: 'black',
              border: '1px solid rgb(124, 123, 120)',
              color: 'white',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'rgba(0, 0, 0)',
              },
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              margin: '1% 0 1% 0'
            }}
          >
            EXAME KIDS 10 NOV 2025
          </Button>
          <Button
            variant='contained'
            className='teens-adults-exam'
            onClick={() => {
              setButtonLoading(true)
              classNameToLocalAndRedirect('teens-adults-exam')
            }}
            sx={{
              backgroundColor: 'black',
              border: '1px solid rgb(124, 123, 120)',
              color: 'white',
              '&.MuiButtonBase-root:hover': {
                backgroundColor: 'rgba(0, 0, 0)',
              },
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              margin: '1% 0 1% 0'
            }}
          >
            EXAME TEENS/ADULTOS 12 NOV 2025
          </Button>
          {isCLicked ? (
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-evenly'
              }}
            >
              <InputBase
                placeholder='Digite a Senha...'
                size='small'
                type={showPassword ? 'text' : 'password'}
                onChange={handleChange}
                sx={{
                  backgroundColor: 'white',
                  borderRadius: '6px',
                  color: 'black',
                  padding: 0.5
                }}
                endAdornment={
                  showPassword
                    ? <VisibilityOff onClick={() => setShowPassword(false)} sx={{ color: 'black' }} />
                    : <Visibility onClick={() => setShowPassword(true)} sx={{ color: 'black' }} />
                }
              />
              <Button
                size='small'
                disabled={isDisable}
                onClick={() => {
                  setButtonLoading(true);
                  classNameToLocalAndRedirect('DAN');
                }}
                sx={{
                  backgroundColor: 'black',
                  borderRadius: '6px',
                  border: isDisable ? 'none' : '1px solid white',
                  color: isDisable ? 'black' : 'white',
                }}
              >
                Entrar
              </Button>
            </Box>
          ) : (
            <Button
              onClick={
                () => {
                  setIsClicked(!isCLicked);
                }
              }
              variant='contained'
              className='btn-adults'
              sx={{
                backgroundColor: 'black',
                border: '1px solid rgb(124, 123, 120)',
                color: 'white',
                '&.MuiButtonBase-root:hover': {
                  backgroundColor: 'rgba(0, 0, 0)',
                },
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                margin: '1% 0 0 0'
              }}
            >
              EXAME DE DAN 22 NOV 2025
            </Button>
          )}
        </Box>
      )
      }
    </Box >
  )
}

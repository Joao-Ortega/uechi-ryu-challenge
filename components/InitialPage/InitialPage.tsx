'use client'
import { Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import Logo from '../../app/assets/images/newLogo.png';
import WhiteBelt from '../../app/assets/images/whiteTest.png';
import { adultsBrownAndBlack, adultsOrangeToDarkBlue, adultsWhiteToYellow, beltColorsKids } from '@/util/beltColors';

export default function InitialPage() {
  // const [isCLicked, setIsClicked] = useState<boolean>(false);
  const [buttonLoading, setButtonLoading] = useState<boolean>(false);
  // const [isDisable, setIsDisable] = useState<boolean>(true);
  // const [password, setPassword] = useState<string>('OKIKUKAI');
  // const [type, setType] = useState<string>('');
  const router = useRouter();

  // useEffect(() => {
  //   if (!type) return
  //   if (type === 'btn-adults') {
  //     const pass = password.toUpperCase();
  //     localStorage.setItem('koto-simon', pass);
  //   }
  //   router.push('/game')
  // }, [type]);

  // const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   setPassword(e.target.value);
  //   if (e.target.value.trim().toUpperCase() === 'OKIKUKAI') {
  //     setIsDisable(false);
  //   } else {
  //     setIsDisable(true);
  //   }
  // }

  // const handleKotoSimonGame = () => {
  //   router.push('/game')
  // }

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
          {/* <Button
            variant='contained'
            className='btn-kids'
            onClick={() => {
              setButtonLoading(true)
              classNameToLocalAndRedirect('btn-kids')
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
            Exame Kids
          </Button>
          <Button
            onClick={() => {
              setButtonLoading(true)
              classNameToLocalAndRedirect('btn-adults')
            }}
            variant='contained'
            className='btn-adults'
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
            Exame Teens / Adultos
          </Button> */}
        </Box>
      )}
      {/* {isCLicked && (
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
      )} */}
    </Box>
  )
}

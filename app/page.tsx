'use-client'
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Box } from '@mui/material';
import Game from '@/components/Game/Game';

export default function Home() {
  return (
   <Game />
  )
}

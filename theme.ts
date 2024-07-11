'use client';

import { createTheme, MantineColorsTuple, } from '@mantine/core';
import { rootCertificates } from 'tls';

const myPrimaryColor: MantineColorsTuple = [
  '#eef6fc',
  '#dce9f3',
  '#b3d1e8',
  '#88b9de',
  '#67a4d6',
  '#5296d1',
  '#4690d0',
  '#387cb9',
  '#2d6fa5',
  '#07121d',
];

const mySecondaryColor: MantineColorsTuple = [
  '#acaebf',
  '#fff',
  '#092031',
  '#092031',
  '#092031',
  '#1b2c3d',
  '#092031',
  '#092031',
  '#092031',
  '#009176',
];

const myButtonColor: MantineColorsTuple = [
  '#e8fef9',
  '#d8f7f0',
  '#b0ede0',
  '#85e4cf',
  '#63dcc1',
  '#4ed7b8',
  '#40d5b4',
  '#30bc9c',
  '#22a88b',
  '#009176',
];

const contentBackground:MantineColorsTuple = [
  '#1b2c3d',
  '#182837',
  '#162331',
  '#131f2b',
  '#101a25',
  '#0e161f',
  '#0b1218',
  '#080d12',
  '#05090c',
  '#030406',
  '#000000',
];

export const theme = createTheme({
  colors: {
    myPrimaryColor,
    mySecondaryColor,
    myButtonColor,
    contentBackground,
    darkPrimaryColor: mySecondaryColor,
    dark:mySecondaryColor
  },
  primaryShade:{
    "light": 6,
    "dark": 8
  },

  fontFamily: 'Montserrat, sans-serif',
  primaryColor: 'myPrimaryColor',
  headings: {
    fontFamily: 'Good Times',
    fontWeight: '700',
  },
});

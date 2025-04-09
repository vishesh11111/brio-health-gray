"use client"

import localFont from 'next/font/local';
import { Geist_Mono, Noto_Sans_Mono } from 'next/font/google';
import { cn } from '<components>/lib/utils';

// Load Aeonik TRIAL as a local font
const fontAeonik = localFont({
  src: [
    {
      path: './fonts/AeonikTRIAL-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    // {
    //   path: './fonts/AeonikTRIAL-Medium.otf',
    //   weight: '500',
    //   style: 'normal',
    // },
    {
      path: './fonts/AeonikTRIAL-Bold.otf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-aeonik'
});

// Keep some monospace fonts for code blocks, etc.
const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
});

const fontNotoMono = Noto_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-noto-mono'
});

export const fontVariables = cn(
  fontAeonik.variable,
  fontMono.variable,
  fontNotoMono.variable
);

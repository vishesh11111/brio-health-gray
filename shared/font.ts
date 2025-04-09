import localFont from 'next/font/local';

export const AeonikTrial = localFont({
  src: [
    {
      path: './fonts/AeonikTRIAL-Light.otf',
      weight: '300',
      style: 'light'
    },
    {
      path: './fonts/AeonikTRIAL-Regular.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/AeonikTRIAL-Bold.otf',
      weight: '700',
      style: 'bold'
    }
  ],
  variable: '--font-aeonik-trial'
});

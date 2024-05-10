import { Poppins, Rubik } from 'next/font/google';

export const Poppins400 = Poppins({
  weight: '400',
  subsets: ['latin'],
});

export const Poppins500 = Poppins({
  weight: '500',
  subsets: ['latin'],
});

export const Poppins600 = Poppins({
  weight: '600',
  subsets: ['latin'],
});

export const Rubik400 = Rubik({
  weight: '400',
  subsets: ['latin'],
});

export const Rubik500 = Rubik({
  weight: '500',
  subsets: ['latin'],
});

export const Rubik600 = Rubik({
  weight: '600',
  subsets: ['latin'],
});

export const PoppinsFont = Poppins({
  weight: ['100', '200', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--poppins',
});

export const RubikFont = Poppins({
  weight: ['100', '200', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--rubik',
});

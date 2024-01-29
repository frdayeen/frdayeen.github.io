// import localFont from "next/dist/compiled/@next/font/dist/local";
import { Montserrat } from "next/font/google";
import localFont from 'next/font/local';


export const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-Montserrat'
})

export const headText = localFont({
    src: './Letterpress-Unicode.ttf',
    variable: '--font-headText'
})

export const bodyText = localFont({
    src: './AdorshoLipi.ttf',
    variable: '--font-bodyText'
})
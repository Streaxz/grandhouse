import type { Metadata } from "next";
import "./globals.css";
import {Header} from "@/app/components/Header/Header";
import "./App.css";
import localFont from '@next/font/local'
import {Footer} from "@/app/components/Footer/Footer";

const objectSans = localFont({
    src: [
        {
            path: '../../public/fonts/ObjectSans-Thin.otf',
            weight: '100'
        },
        {
            path: '../../public/fonts/ObjectSans-ThinSlanted.otf',
            weight: '100',
            style: 'italic'
        },
        {
            path: '../../public/fonts/ObjectSans-Light.otf',
            weight: '300'
        },
        {
            path: '../../public/fonts/ObjectSans-LightSlanted.otf',
            weight: '300',
            style: 'italic'
        },
        {
            path: '../../public/fonts/ObjectSans-Regular.otf',
            weight: '400'
        },
        {
            path: '../../public/fonts/ObjectSans-Slanted.otf',
            weight: '400',
            style: 'italic'
        },
        {
            path: '../../public/fonts/ObjectSans-Heavy.otf',
            weight: '700'
        },
        {
            path: '../../public/fonts/ObjectSans-HeavySlanted.otf',
            weight: '700',
            style: 'italic'
        },
        {
            path: '../../public/fonts/ObjectSans-Black.otf',
            weight: '900'
        }
    ],
    variable: '--font-object-sans'
})

const petersburg = localFont({
    src: [
        {
            path: '../../public/fonts/Petersburg-italic.ttf',
            weight: '900'
        }
    ],
    variable: '--font-petersburg'
  }
)

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${objectSans.variable} ${petersburg.variable}`} style={{fontWeight:"300"}}>
        <body className={`body`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}

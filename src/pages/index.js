import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ setNavColor }) {
  useEffect(() => {
    setNavColor('bg-[#e0e6eb]');
  }, []);

  return (
    <>
      <Head>
        <title>Hugh | Front-End Developer</title>
        <meta name='description' content='Web-development Portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

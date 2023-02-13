import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { useState, useEffect } from 'react';
import { Nunito } from '@next/font/google';
import { ParallaxProvider } from 'react-scroll-parallax';

const nunito = Nunito({
  subsets: ['latin'],
  // weight: ['400', '700'],
});

export default function App({ Component, pageProps }) {
  const [navColor, setNavColor] = useState('bg-[#e0e6eb]');
  //instead of this, could also have called useRouter and router.asPath in the Navbar component, and handling this state inside of that same component

  return (
    <ParallaxProvider>
      <main className={nunito.className}>
        <Navbar navColor={navColor} />
        <Component {...pageProps} setNavColor={setNavColor} />
      </main>
    </ParallaxProvider>
  );
}

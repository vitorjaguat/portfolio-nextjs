import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { useState } from 'react';
import { Nunito } from '@next/font/google';
import { ParallaxProvider } from 'react-scroll-parallax';
import { appWithTranslation } from 'next-i18next';

const nunito = Nunito({
  subsets: ['latin'],
  // weight: ['400', '700'],
});

const App = ({ Component, pageProps }) => {
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
};

export default appWithTranslation(App);

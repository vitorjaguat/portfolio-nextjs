import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { useState, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const [navColor, setNavColor] = useState('bg-[#e0e6eb]');

  return (
    <>
      <Navbar navColor={navColor} />
      <Component {...pageProps} setNavColor={setNavColor} />
    </>
  );
}

import Head from 'next/head';
import Image from 'next/image';
import Main from '@/components/Main';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

// export async function getAllTranslationsServerSide(locale) {
//   return serverSideTranslations(
//     locale,
//     ['common'],
//     nextI18nextConfig,
//     nextI18nextConfig.i18n.locales
//   );
// }

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await getAllTranslationsServerSide(locale)),
//     },
//   };
// }

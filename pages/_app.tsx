import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import '../styles/global.scss';
import type { AppProps } from 'next/app';
import Head from "next/head";
import Header from './components/Header';
import SocialMedia from './components/SocialMedia';
import Menu from './components/Menu';
import Footer from './components/Footer';
import React, { useState, useEffect, createContext } from 'react';
import { useRouter } from 'next/router';

import AboutStyle from '../styles/About.module.scss'
import ContactStyle from '../styles/Contact.module.scss'
import HomeStyle from '../styles/Home.module.scss'
import MyResumeStyle from '../styles/MyResume.module.scss'
import WorksStyle from '../styles/Works.module.scss'
import MacbookStyle from './components/Macbook/Macbook.module.scss'

const criticalStyles = {
  AboutStyle,
  ContactStyle,
  HomeStyle,
  MyResumeStyle,
  WorksStyle,
  MacbookStyle
}

export const StylesContext = createContext(criticalStyles)

const fadeBack = {
  name: 'Fade Back',
  variants: {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  },
  transition: {
    duration: 0.4,
  },
};

export const animations = [fadeBack];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isMenuAnimate, setIsMenuAnimate] = useState<boolean>(false);
  const [animation, setAnimation] = useState(animations[0]);
  const [exitBefore, setExitBefore] = useState(false);

  const changeMenuStatus: Function = () => {
    if (isMenuActive) {
      setIsMenuAnimate(false);
      setTimeout(() => {
        setIsMenuActive(false);
      }, 310);
    } else {
      setIsMenuActive(true);
      setTimeout(() => {
        setIsMenuAnimate(true);
      }, 50);
    }
  };
  useEffect(() => {
    if (isMenuActive === true) {
      setIsMenuAnimate(false);
      setTimeout(() => {
        setIsMenuActive(false);
      }, 310);
    }
  }, [router]);
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#f1e112" />
        <meta name="msapplication-TileColor" content="#f1e112" />
        <meta name="theme-color" content="#f1e112" />
      </Head>
      <StylesContext.Provider value={criticalStyles}>
        <div className="site">
          <Header isMenuStatus={isMenuActive} isMenuActive={changeMenuStatus} />
          <SocialMedia isMenuStatus={isMenuActive} />
          <Menu isMenuStatus={isMenuActive} isMenuAnimate={isMenuAnimate} />
          <main className="site__container">
            <LazyMotion features={domAnimation}>
              <AnimatePresence exitBeforeEnter={!exitBefore} initial={false}>
                <m.div
                  key={router.route.concat(animation.name)}
                  className="site__main"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={animation.variants}
                  transition={animation.transition}
                >
                  <Component key={router.asPath} {...pageProps} />
                </m.div>
              </AnimatePresence>
            </LazyMotion>
          </main>
          <Footer />
        </div>
      </StylesContext.Provider>
    </>
  );
}

export default React.memo(MyApp);

import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import getPlus from './components/GetPlus';
import styles from '../styles/Home.module.scss';
import Macbook from './components/Macbook';

const Home: NextPage = () => {
  return (
    <div className={`page ${styles.home}`}>
      <Head>
        <title>Sr.FrontEnd Developer - MDervent</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.plus_list}>{getPlus({ count: 120 })}</div>
      <div className={styles.text_wrap}>
        <h3>CREATIVE</h3>
        <h1>SR. FRONTEND DEVELOPER</h1>
        <h2>FULL RESPONSIVE + CROSS BROWSER</h2>
        <Link href="/works">explore my works</Link>
      </div>
      <Macbook />
      <Link href="/contact">
        <a className={styles.sayHi_btn}>
          <span>Say hi!</span>
        </a>
      </Link>
    </div>
  );
};

export default Home;

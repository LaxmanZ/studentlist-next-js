import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
    <Head>
      <title>ZORO | Home</title>
      <meta name="keywords" content="student-list" />
    </Head>
      <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        unde. Error culpa rem laborum facere! Impedit quisquam maxime beatae
        eligendi, corrupti fugiat, similique odit inventore fuga dolorem velit
        recusandae dolorum.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        unde. Error culpa rem laborum facere! Impedit quisquam maxime beatae
        eligendi, corrupti fugiat, similique odit inventore fuga dolorem velit
        recusandae dolorum.
      </p>

      <Link className={styles.btn} href="/student">See Student Listing</Link>
    </div>
    </>
  );
}

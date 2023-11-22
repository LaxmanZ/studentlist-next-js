import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>HomePage</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        unde. Error culpa rem laborum facere! Impedit quisquam maxime beatae
        eligendi, corrupti fugiat, similique odit inventore fuga dolorem velit
        recusandae dolorum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
        unde. Error culpa rem laborum facere! Impedit quisquam maxime beatae
        eligendi, corrupti fugiat, similique odit inventore fuga dolorem velit
        recusandae dolorum.
      </p>
      <Footer />
    </div>
  );
}

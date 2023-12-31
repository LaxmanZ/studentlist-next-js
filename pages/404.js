import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) //means it will go back 1 time
      router.push('/');
    }, 3000);
  }, []);

  return (
    <>
      {/* adding title to page and key-words for the page  */}
      <Head>
        <title>Zoro | Not Found</title>
        <meta name="keywords" content="student-list" />
      </Head>
      <div className="not-found">
        <h1>Ooooopss....!</h1>
        <h2>This Page Cannot Be Found</h2>
        <p>
          Go Back To The
          <Link className="linksss" href="/">
            Home
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;

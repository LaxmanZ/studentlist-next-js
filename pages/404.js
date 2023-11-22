import Link from 'next/link';

const NotFound = () => {
  return (
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
  );
};

export default NotFound;

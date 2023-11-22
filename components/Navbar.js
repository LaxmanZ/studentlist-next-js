import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Student List</h1>
      </div>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/student">Student Listing</Link>
    </nav>
  );
};

export default Navbar;

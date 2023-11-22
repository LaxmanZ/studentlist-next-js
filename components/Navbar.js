import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image width={70} height={60} src="/logo.jpg" alt="logo" /> 
        
      </div>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/student">Student Listing</Link>
    </nav>
  );
};

export default Navbar;

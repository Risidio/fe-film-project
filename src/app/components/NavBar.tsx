import React from 'react';
import Link from 'next/link';
import AiBlockchainToggle from './AiBlockchainToggle';

const NavBar: React.FC = () => {
  return (
    <nav className="flex h-16 items-center justify-between bg-[#0D1B2A]/50 px-6 text-white">
      <AiBlockchainToggle />
      <div className="flex items-center space-x-12">
        <Link href="/" className="transition-colors hover:text-gray-300">
          HOME
        </Link>
        <Link
          href="/createIP"
          className="transition-colors hover:text-gray-300"
        >
          CREATE IP
        </Link>
        <Link href="/about" className="transition-colors hover:text-gray-300">
          ABOUT
        </Link>
        <Link href="/help" className="transition-colors hover:text-gray-300">
          HELP
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

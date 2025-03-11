

import React from "react";
import Link from "next/link";
import AiBlockchainToggle from "./AiBlockchainToggle";


const NavBar: React.FC = () => {

  return (
    <nav className="bg-[#0D1B2A]/50 h-16 flex items-center justify-between px-6 text-white">
        <AiBlockchainToggle/>
      <div className="flex items-center space-x-12">
        <Link
          href="/"
          className="hover:text-gray-300 transition-colors"
        >
          HOME
        </Link>
        <Link
          href="/createIP"
          className="hover:text-gray-300 transition-colors"
        >
          CREATE IP
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-300 transition-colors"
        >
          ABOUT
        </Link>
        <Link
          href="/help"
          className="hover:text-gray-300 transition-colors"
        >
          HELP
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
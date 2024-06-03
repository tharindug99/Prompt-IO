"use client"
import { CgProfile } from "react-icons/cg";
import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from '../assets/images/Logo.png';
import Link from 'next/link';
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isUserLoggedIn = true;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    fetchProviders();
  }, [])


  return (
    <header className="text-white bg-gradient-to-r from-emerald-500 to-lime-500 h-16 flex items-center justify-between px-4">
      <div className="flex items-center">
        <Link href="/" className="flex gap-2 items-center">
          <Image src={Logo} alt="logo" width={70} height={70} />
        </Link>
      </div>
      <nav className="hidden lg:flex items-center gap-x-4">
        {isUserLoggedIn ? (
          <>
            <Link href="/" className="bg-black px-5 py-2 rounded-3xl hover:bg-gray-700">Create Post</Link>

            <button className="bg-white border-black b-2 text-black px-5 py-2 rounded-3xl hover:bg-gray-700">Sign Out</button>

            <CgProfile size={45} />
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))
            }
          </>

        )}
      </nav>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="p-2">
          <RxHamburgerMenu size={30} />
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gradient-to-r from-emerald-500 to-lime-500 flex flex-col items-center gap-y-4 p-4 lg:hidden">
          <Link href="/" className="hover:text-gray-200" onClick={toggleMenu}>Home</Link>
          <Link href="/about" className="hover:text-gray-200" onClick={toggleMenu}>About</Link>
          <Link href="/contact" className="hover:text-gray-200" onClick={toggleMenu}>Contact</Link>
          {isUserLoggedIn ? (
            <>
              <Link href="/create-prompt" className="hover:text-gray-200" onClick={toggleMenu}>Create Post</Link>
              <button className="hover:text-gray-200" onClick={toggleMenu}>Sign Out</button>
            </>
          ) : (
            <Link href="/signup" className="hover:text-gray-200" onClick={toggleMenu}>Sign Up</Link>
          )}
        </nav>
      )}
    </header>
  );
}

export default Header;

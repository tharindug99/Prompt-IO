import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <div className="text-black bg-slate-100 h-auto py-6 fixed bottom-0 w-full">
      <div className="flex justify-between grid-cols-1 items-center p-4">
        <div className="flex flex-col space-y-2 cursor-pointer pl-5 hover:text-emerald-500">
          <div>Sign Up</div>
          <div>Contact</div>
          <div>About</div>
          <div>Home</div>
        </div>
        <div className="flex space-x-4 pr-5">
          <a href="https://www.facebook.com" className="text-black hover:text-emerald-500">
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.twitter.com" className="text-black hover:text-emerald-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com" className="text-black hover:text-emerald-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com" className="text-black hover:text-emerald-500">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

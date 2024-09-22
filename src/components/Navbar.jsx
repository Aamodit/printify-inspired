import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-green-600 text-2xl font-bold animate-fade-in">YourLogo</a>
        <div className="hidden md:flex space-x-6">
          <a href="/catalog" className="hover:text-green-600 animate-fade-in">Catalog</a>
          <a href="/how-it-works" className="hover:text-green-600 animate-fade-in">How It Works</a>
          <a href="/pricing" className="hover:text-green-600 animate-fade-in">Pricing</a>
          <a href="/blog" className="hover:text-green-600 animate-fade-in">Blog</a>
          <a href="/services" className="hover:text-green-600 animate-fade-in">Services</a>
          <a href="/use-cases" className="hover:text-green-600 animate-fade-in">Use Cases</a>
          <a href="/help" className="hover:text-green-600 animate-fade-in">Need Help?</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-green-600 focus:outline-none">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={`md:hidden bg-white shadow-lg transition-all duration-300 ease-in-out transform ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}>
          <div className="flex flex-col items-center p-4 space-y-2 animate-fade-in">
            <a href="/catalog" className="hover:text-green-600">Catalog</a>
            <a href="/how-it-works" className="hover:text-green-600">How It Works</a>
            <a href="/pricing" className="hover:text-green-600">Pricing</a>
            <a href="/blog" className="hover:text-green-600">Blog</a>
            <a href="/services" className="hover:text-green-600">Services</a>
            <a href="/use-cases" className="hover:text-green-600">Use Cases</a>
            <a href="/help" className="hover:text-green-600">Need Help?</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

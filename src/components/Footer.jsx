import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 animate-fade-in">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Your Company Name</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="/about" className="hover:underline transition duration-300 transform hover:scale-105">About Us</a>
          <a href="/privacy" className="hover:underline transition duration-300 transform hover:scale-105">Privacy Policy</a>
          <a href="/terms" className="hover:underline transition duration-300 transform hover:scale-105">Terms of Service</a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

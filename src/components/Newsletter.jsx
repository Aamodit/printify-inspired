import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-green-600 text-white text-center animate-fade-in">
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Get the latest updates and offers delivered to your inbox!</p>
      <div className="flex justify-center">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="px-4 py-2 rounded-l-lg border border-white focus:outline-none" 
        />
        <button className="bg-white text-green-600 px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;

import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center pt-32 transition-transform duration-700"
      style={{ backgroundImage: "url('/public/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent"></div>
      <div className="container mx-auto text-center relative z-10 p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 animate-fade-in">Create Your Own Custom Merchandise</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fade-in delay-200">Print on demand with no upfront costs. Easy to use, and fast shipping.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 transform hover:scale-105 animate-bounce">Get Started</button>
          <button className="border border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300 transform hover:scale-105 animate-bounce delay-100">Learn More</button>
        </div>
        <div className="mt-8">
          <img src="/public/images/white-tshirt-background.png" alt="Hero Illustration" className="mx-auto w-1/2 md:w-1/3 animate-fade-in delay-400" />
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a href="#features" className="text-white text-lg underline animate-fade-in delay-600">Scroll Down to Discover More</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

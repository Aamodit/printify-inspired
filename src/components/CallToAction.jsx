import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-green-600 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
      <p className="mb-6">Join us today and bring your ideas to life!</p>
      <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">
        Get Started
      </button>
    </section>
  );
};

export default CallToAction;

import React from 'react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: "Higher Profits",
    description: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business.",
    image: "/public/images/feature-photo1.svg",
  },
  {
    title: "Robust Scaling",
    description: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
    image: "/public/images/feature-photo2.svg",
  },
  {
    title: "Best Selection",
    description: "With 900+ products and top quality brands, you can choose the best products for your business.",
    image: "/public/images/feature-photo3.svg",
  },
];

const Features = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto text-center mb-12">
        <h2 className={`text-3xl font-bold text-gray-800 mb-6 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>Features You'll Love</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className={`bg-white shadow-lg rounded-lg p-6 text-left transition-transform transform ${inView ? 'scale-100' : 'scale-95'} duration-700`}>
            <img src={feature.image} alt={feature.title} className="mb-4 w-16 h-16 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

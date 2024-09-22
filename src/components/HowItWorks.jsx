import React from 'react';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    title: "Create",
    description: "Custom products: Easily add your designs to a wide range of products using our free tools.",
    image: "/images/hiw-image1.webp",
  },
  {
    title: "Sell",
    description: "On your terms: You choose the products, sale price, and where to sell.",
    image: "/images/hiw-image2.webp",
  },
  {
    title: "We Handle",
    description: "Fulfillment: Once an order is placed, we automatically handle all the printing and delivery logistics.",
    image: "/images/hiw-image3.webp",
  },
];

const HowItWorks = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto text-center mb-12">
        <h2 className={`text-3xl font-bold text-gray-800 mb-6 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>How It Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div key={step.title} className={`bg-gray-50 rounded-lg p-6 shadow-lg text-left transition-transform transform ${inView ? 'scale-100' : 'scale-95'} duration-700`}>
            <img src={step.image} alt={step.title} className="mb-4 w-16 h-16 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

import React from 'react';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "This platform made it easy to create and sell my designs. Highly recommend!",
    image: "/images/testm-img.jpg",
  },
  {
    name: "John Smith",
    feedback: "Great service and quick shipping! My customers love the products.",
    image: "/images/testm-img.jpg",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto text-center mb-12">
        <h2 className={`text-3xl font-bold text-gray-800 mb-6 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>What Our Customers Say</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className={`bg-white shadow-lg rounded-lg p-6 w-full md:w-1/3 transition-transform transform ${inView ? 'scale-100' : 'scale-95'} duration-700`}>
            <img src={testimonial.image} alt={testimonial.name} className="mb-4 w-16 h-16 rounded-full mx-auto" />
            <p className="text-gray-600 italic mb-2">"{testimonial.feedback}"</p>
            <h4 className="text-lg font-semibold">{testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

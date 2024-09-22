import React, { useState } from 'react';

const faqs = [
  { question: "What is print on demand?", answer: "Print on demand is a process where items are printed only after an order is placed." },
  { question: "How does shipping work?", answer: "Shipping is automatically handled once an order is placed." },
  { question: "Can I customize products?", answer: "Yes, you can easily customize products using our tools." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in">Frequently Asked Questions</h2>
      </div>
      <div className="max-w-xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div 
              className="bg-white shadow-lg rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition duration-300" 
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
            </div>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
            >
              <p className="bg-gray-100 p-4 rounded-lg animate-fade-in">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

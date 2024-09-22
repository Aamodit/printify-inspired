import React from 'react';

const products = [
  { id: 1, name: "T-Shirt", image: "/public/images/tshirt-design1.png", price: "$20" },
  { id: 2, name: "Mug", image: "/public/images/tshirt-design2.png", price: "$15" },
  { id: 3, name: "Sticker", image: "/public/images/tshirt-design3.png", price: "$5" },
];

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 animate-fade-in">Our Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className={`bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 animate-fade-in delay-${index * 100}`}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;

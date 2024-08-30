// src/components/HabitCardBack.js
import React from 'react';
import { motion } from 'framer-motion';
import { RiCloseLine } from 'react-icons/ri';

const HabitCardBack = ({ habit, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{habit.name}</h2>
          <RiCloseLine className="text-2xl cursor-pointer" onClick={onClose} />
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Description</h3>
          <p>{habit.description}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Benefits</h3>
          <ul className="list-disc pl-5">
            {habit.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Tips</h3>
          <ul className="list-disc pl-5">
            {habit.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {habit.relatedProducts.map((product, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {habit.videoContent && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{habit.videoContent.title}</h3>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                title="Video"
                src={habit.videoContent.embedUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HabitCardBack;